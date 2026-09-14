/* eslint-disable no-console */
import { spawnSync } from 'node:child_process';
import { statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

/**
 * Resolves a fixed set of specifier shapes against the real `exports` map of this package, so that a change to the map
 * is caught here rather than in a consumer's build. Nothing is published: every resolver runs against the package
 * directory through Node's self-reference support, which goes through the same algorithm a dependent would use.
 */

const PACKAGE = path.resolve(import.meta.dirname, '..');

const RESOLVE_IN_ESM = `
const results = JSON.parse(process.env.CHECK_EXPORTS_SPECIFIERS).map((specifier) => {
  try {
    return { specifier, url: import.meta.resolve(specifier) };
  } catch (error) {
    return { specifier, error: error.code || error.message };
  }
});

process.stdout.write(JSON.stringify(results));
`;

const RESOLVE_IN_CJS = `
const { pathToFileURL } = require('node:url');

const results = JSON.parse(process.env.CHECK_EXPORTS_SPECIFIERS).map((specifier) => {
  try {
    return { specifier, url: pathToFileURL(require.resolve(specifier)).href };
  } catch (error) {
    return { specifier, error: error.code || error.message };
  }
});

process.stdout.write(JSON.stringify(results));
`;

/** Every resolver is a separate child process, because export conditions are a process-wide flag. */
const RESOLVERS = [
  { name: 'node-esm', args: ['--input-type=module'], code: RESOLVE_IN_ESM },
  {
    name: 'node-esm --conditions=react-server',
    args: ['--conditions=react-server', '--input-type=module'],
    code: RESOLVE_IN_ESM,
  },
  { name: 'node-cjs', args: [], code: RESOLVE_IN_CJS },
];

const ICON = 'icons/IconMenuLineW500.js';

/**
 * `null` means the specifier is expected not to resolve to a file. Those entries are as load bearing as the positive
 * ones: an `exports` map that lets them reach an adjacent `.d.ts` type-checks clean and then fails the consumer build.
 */
const EXPECTATIONS = [
  {
    specifier: '@esfront/react',
    description: 'the package root',
    targets: {
      'node-esm': 'lib/index.js',
      'node-esm --conditions=react-server': 'lib/react-server/index.js',
      'node-cjs': 'lib/node/index.js',
    },
  },
  {
    specifier: `@esfront/react/lib/${ICON}`,
    description: 'a lib-prefixed deep import, the form that worked before the exports map existed',
    targets: {
      'node-esm': `lib/${ICON}`,
      'node-esm --conditions=react-server': `lib/${ICON}`,
      'node-cjs': `lib/${ICON}`,
    },
  },
  {
    specifier: `@esfront/react/${ICON}`,
    description: 'a lib-less deep import, equivalent to the lib-prefixed one',
    targets: {
      'node-esm': `lib/${ICON}`,
      'node-esm --conditions=react-server': `lib/${ICON}`,
      'node-cjs': `lib/${ICON}`,
    },
  },
  {
    specifier: '@esfront/react/package.json',
    description: 'the manifest, which tooling reads directly',
    targets: {
      'node-esm': 'package.json',
      'node-esm --conditions=react-server': 'package.json',
      'node-cjs': 'package.json',
    },
  },
  {
    specifier: '@esfront/react/components/Badge',
    description: 'a directory-style deep import, unsupported because the build emits no per-directory barrel',
    targets: {
      'node-esm': null,
      'node-esm --conditions=react-server': null,
      'node-cjs': null,
    },
  },
];

const resolveAll = ({ name, args, code }, specifiers) => {
  const child = spawnSync(process.execPath, [...args, '-e', code], {
    cwd: PACKAGE,
    encoding: 'utf8',
    env: { ...process.env, CHECK_EXPORTS_SPECIFIERS: JSON.stringify(specifiers) },
  });

  if (child.status !== 0) {
    console.error(`check:exports could not run the ${name} resolver:\n${child.stderr || child.stdout}`);
    process.exit(1);
  }

  return new Map(JSON.parse(child.stdout).map((result) => [result.specifier, result]));
};

const isFile = (url) => {
  try {
    return statSync(fileURLToPath(url)).isFile();
  } catch {
    return false;
  }
};

const specifiers = EXPECTATIONS.map((expectation) => expectation.specifier);
const results = new Map(RESOLVERS.map((resolver) => [resolver.name, resolveAll(resolver, specifiers)]));

const failures = [];
let checked = 0;

for (const { specifier, description, targets } of EXPECTATIONS) {
  for (const [resolver, expected] of Object.entries(targets)) {
    checked += 1;

    const { url, error } = results.get(resolver).get(specifier);
    const resolved = url && isFile(url) ? path.relative(PACKAGE, fileURLToPath(url)) : null;

    if (expected === null) {
      if (resolved !== null) {
        failures.push(
          `${specifier} via ${resolver}: expected no resolution (${description}), but it resolved to ${resolved}`
        );
      }

      continue;
    }

    if (resolved === null) {
      const reason = error ? `the resolver failed with ${error}` : `${url} is not an existing file`;
      failures.push(`${specifier} via ${resolver}: expected ${expected} (${description}), but ${reason}`);
      continue;
    }

    if (resolved !== expected) {
      failures.push(`${specifier} via ${resolver}: expected ${expected} (${description}), but resolved to ${resolved}`);
    }
  }
}

if (failures.length) {
  console.error('The exports map does not resolve the supported specifier shapes:\n');

  for (const failure of failures) {
    console.error(`  ${failure}`);
  }

  console.error('\nCheck the "exports" field of package.json and the layout the build emits under lib.');
  process.exit(1);
}

console.log(`check:exports passed — ${checked} resolutions across ${RESOLVERS.length} resolvers.`);
