/* eslint-disable no-console */
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(import.meta.dirname, '../src');

const REACT_HOOKS = [
  'useState',
  'useEffect',
  'useLayoutEffect',
  'useRef',
  'useMemo',
  'useCallback',
  'useContext',
  'useReducer',
  'useImperativeHandle',
  'useId',
  'useSyncExternalStore',
  'useTransition',
  'useDeferredValue',
  'useInsertionEffect',
];

const REACT_HOOK = new RegExp(`\\b(${REACT_HOOKS.join('|')})\\b`);
const CUSTOM_HOOK = /\buse[A-Z]\w*\s*\(/g;
const CLIENT_LIB =
  /^(@react-spring\/|@use-gesture\/|@floating-ui\/|overlayscrollbars|react-transition-group|react-dom)/;
const BROWSER =
  /\b(window|document|navigator|localStorage|sessionStorage|ResizeObserver|IntersectionObserver|matchMedia)\b/;
const HANDLER = /\bon[A-Z]\w*\s*=\s*\{/;
const FORWARD_REF = /\bforwardRef\b/;
const RELATIVE_IMPORT = /\bfrom\s+'(\.[^']*)'/g;

/**
 * Strips comments so that documentation prose is never mistaken for behaviour. Block comments are only recognized when
 * they open a line, so a `/*`-like sequence inside a string literal cannot swallow the code that follows it.
 */
const stripComments = (source) => source.replace(/^\s*\/\*[\s\S]*?\*\//gm, '').replace(/^\s*\/\/.*$/gm, '');

/**
 * The directive only takes effect as the first statement of a module, so a match anywhere else does not make the module
 * a client boundary.
 */
const hasUseClient = (source) => {
  const firstStatement = source
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.length > 0 && !line.startsWith('//') && !line.startsWith('/*') && !line.startsWith('*'));

  return firstStatement === "'use client';" || firstStatement === '"use client";';
};

/** The reasons a module cannot be evaluated on the server, judged from its own source alone. */
const clientOnlyReasons = (rawSource) => {
  const source = stripComments(rawSource);
  const reasons = [];

  const customHooks = [...source.matchAll(CUSTOM_HOOK)]
    .map((match) => match[0].replace(/\s*\($/, ''))
    .filter((hook) => hook !== 'useDefaultProps' && !REACT_HOOKS.includes(hook));

  // Find all imports and filter out type-only imports
  const allImports = [...rawSource.matchAll(/import\s+(?:type\s+)?[^;]*from\s+'([^']+)'/g)];
  const packages = allImports
    .filter((match) => !match[1].startsWith('.') && !match[0].includes('import type'))
    .map((match) => match[1]);

  if (REACT_HOOK.test(source)) {
    reasons.push('react hook');
  }

  if (customHooks.length) {
    reasons.push(`custom hook: ${[...new Set(customHooks)].join(', ')}`);
  }

  if (packages.some((name) => CLIENT_LIB.test(name))) {
    reasons.push('client-only library');
  }

  if (BROWSER.test(source)) {
    reasons.push('browser API');
  }

  if (HANDLER.test(source)) {
    reasons.push('inline event handler');
  }

  if (FORWARD_REF.test(source)) {
    reasons.push('forwardRef');
  }

  return reasons;
};

const listFiles = (pattern) => {
  const output = execSync(
    `find ${JSON.stringify(ROOT)} -name '${pattern}' -not -name '*.stories.tsx' -not -name '*.d.ts' -not -path '*/testing/*'`,
    { encoding: 'utf8' }
  ).trim();

  return output ? output.split('\n') : [];
};

const files = [...listFiles('*.ts'), ...listFiles('*.tsx')];

if (!files.length) {
  console.error(`check:rsc found no modules under ${ROOT}. Is the path correct?`);
  process.exit(1);
}

const modules = new Map();

for (const file of files) {
  const source = readFileSync(file, 'utf8');

  modules.set(file, {
    directive: hasUseClient(source),
    reasons: clientOnlyReasons(source),
    imports: [...source.matchAll(RELATIVE_IMPORT)].map((match) => path.resolve(path.dirname(file), match[1])),
  });
}

const resolveImport = (target) => {
  const candidates = [`${target}.ts`, `${target}.tsx`, path.join(target, 'index.ts'), path.join(target, 'index.tsx')];

  return candidates.find((candidate) => modules.has(candidate)) ?? null;
};

/**
 * Walks everything a directive-free module pulls in, stopping at any module that declares the directive: those are
 * client boundaries, which a server module is free to render.
 */
const findClientOnlyDependency = (root) => {
  const seen = new Set([root]);
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();

    for (const target of modules.get(current).imports) {
      const resolved = resolveImport(target);

      if (!resolved || seen.has(resolved)) {
        continue;
      }

      seen.add(resolved);
      const dependency = modules.get(resolved);

      if (dependency.directive) {
        continue;
      }

      if (dependency.reasons.length) {
        return { file: resolved, reasons: dependency.reasons };
      }

      queue.push(resolved);
    }
  }

  return null;
};

const roots = files.filter(
  (file) =>
    file.endsWith('.tsx') &&
    !modules.get(file).directive &&
    (file.startsWith(path.join(ROOT, 'components')) || file.startsWith(path.join(ROOT, 'icons')))
);

const failures = [];

for (const root of roots) {
  const own = modules.get(root).reasons;

  if (own.length) {
    failures.push(`${path.relative(ROOT, root)}: ${own.join('; ')}`);
    continue;
  }

  const dependency = findClientOnlyDependency(root);

  if (dependency) {
    failures.push(
      `${path.relative(ROOT, root)}: reaches ${path.relative(ROOT, dependency.file)} (${dependency.reasons.join('; ')}) with no client boundary in between`
    );
  }
}

if (failures.length) {
  console.error('Modules without the "use client" directive that cannot render on the server:\n');

  for (const failure of failures) {
    console.error(`  ${failure}`);
  }

  console.error('\nEither add the directive or move the client-only code out of the module.');
  process.exit(1);
}

console.log(`check:rsc passed — ${roots.length} server modules checked against ${modules.size} scanned.`);
