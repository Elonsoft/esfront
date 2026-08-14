/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const { execSync } = require('node:child_process');

const typedoc = require('../../react/src/typedoc.json');

const COMPONENTS_DIR = path.resolve(__dirname, '../../react/src/components');

const ROOT_DIR = path.resolve(__dirname, '../../..');

const PACKAGE_FILE = path.resolve(__dirname, '../package.json');
const PLUGIN_FILE = path.resolve(__dirname, '.claude-plugin/plugin.json');
const MARKETPLACE_FILE = path.resolve(ROOT_DIR, '.claude-plugin/marketplace.json');

/** The path of this plugin as the marketplace refers to it, relative to the repository root. */
const PLUGIN_SOURCE = `./${path.relative(ROOT_DIR, __dirname).split(path.sep).join('/')}`;

/** `ReflectionKind.Function`, the kind typedoc gives to a component. */
const KIND_FUNCTION = 64;

/** The typedoc kinds of a value export: `Variable`, `Function` and `Class`. */
const VALUE_KINDS = [32, KIND_FUNCTION, 128];

/** The directories inside a component that hold assets or translations rather than components. */
const IGNORED_DIRS = ['icons', 'locale'];

/** The typedoc entries indexed by name, keeping the first declaration of each. */
const typedocByName = new Map();

for (const child of typedoc.children) {
  if (!typedocByName.has(child.name)) {
    typedocByName.set(child.name, child);
  }
}

/** The file a typedoc entry was declared in, relative to the repository root. */
function getSourceFile(item) {
  return item.sources?.[0]?.fileName || '';
}

/** Joins the parts of a doc comment into a single string, keeping inline code spans. */
function joinContent(content) {
  return (content || []).map((part) => part.text).join('');
}

/** Flattens a description onto a single markdown table cell. */
function normalize(text) {
  return text.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim();
}

/** Builds the description of a component or hook from its typedoc entry. */
function getDescription(name) {
  const item = typedocByName.get(name);

  // Typedoc attaches the doc comment of a `function` declaration to its signature rather than to the declaration
  // itself, unlike the comment of a `const` one.
  const comment = item?.comment || item?.signatures?.find((signature) => signature.comment)?.comment;

  if (!comment) {
    return '';
  }

  const summary = joinContent(comment.summary);

  const see = (comment.blockTags || [])
    .filter((tag) => tag.tag === '@see')
    .map((tag) => `See ${joinContent(tag.content)}.`)
    .join(' ');

  return normalize([summary, see].filter(Boolean).join(' '));
}

/**
 * Lists the `.tsx` files inside `dir` recursively, skipping the directories that hold assets rather than
 * components, and the story and test files.
 */
function readComponentFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return IGNORED_DIRS.includes(entry.name) ? [] : readComponentFiles(entryPath);
    }

    return entry.name.endsWith('.tsx') && !/\.(stories|spec|test)\.tsx$/.test(entry.name) ? [entryPath] : [];
  });
}

function buildTable(header, names) {
  const rows = names.map((name) => `| ${name} | ${getDescription(name)} |`);

  return `| ${header} | Description |\n| - | - |\n${rows.join('\n')}`;
}

function readJSON(file) {
  return JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }));
}

function writeJSON(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
}

/**
 * Copies the package version onto the plugin manifest and onto the entry the marketplace holds for it. The entry
 * is found by its source rather than by its name, which is what the two manifests disagree on.
 */
function buildVersion() {
  const { version } = readJSON(PACKAGE_FILE);

  writeJSON(PLUGIN_FILE, { ...readJSON(PLUGIN_FILE), version });

  const marketplace = readJSON(MARKETPLACE_FILE);
  const plugin = marketplace.plugins.find((item) => item.source === PLUGIN_SOURCE);

  if (!plugin) {
    throw new Error(`The marketplace has no plugin with the source "${PLUGIN_SOURCE}".`);
  }

  plugin.version = version;
  writeJSON(MARKETPLACE_FILE, marketplace);
}

/** Reads a template from the skill sources. */
function readTemplate(file) {
  return fs.readFileSync(path.resolve(__dirname, `./src/skills/esfront-react/${file}`), { encoding: 'utf8' });
}

/** Writes a built file into the skill. */
function writeSkill(file, content) {
  fs.writeFileSync(path.resolve(__dirname, `./skills/esfront-react/${file}`), content);
}

function buildReference(reference, names, header) {
  const result = readTemplate(`references/${reference}.md`).replace(
    `**${reference.toUpperCase()}_TABLE**`,
    buildTable(header, names)
  );

  writeSkill(`references/${reference}.md`, result);
}

function buildSkill(components, hooks) {
  const result = readTemplate('SKILL.md')
    .replace('**COMPONENTS_LIST**', components.join(', '))
    .replace('**HOOKS_LIST**', hooks.join(', '));

  writeSkill('SKILL.md', result);
}

/**
 * Lists the exported components. A file holds a component only when it is named after a function the package
 * exports, which is what separates `DialogStackProvider.tsx` from the `DialogStack` directory that groups it,
 * or from the context modules next to it.
 */
const components = [
  ...new Set(
    readComponentFiles(COMPONENTS_DIR)
      .map((file) => path.basename(file, '.tsx'))
      .filter((name) => typedocByName.get(name)?.kind === KIND_FUNCTION)
  ),
].sort();

/**
 * Lists the exported hooks. They cannot be read from `hooks/` alone: a hook tied to a single component, such as
 * `useDialogStack`, lives next to that component under `components/` yet is re-exported from the package root.
 */
const hooks = [
  ...new Set(
    typedoc.children
      .filter((item) => VALUE_KINDS.includes(item.kind) && /^use[A-Z]/.test(item.name))
      .filter((item) => /\/src\/(components|hooks)\//.test(getSourceFile(item)))
      .map((item) => item.name)
  ),
].sort();

buildReference('components', components, 'Component');
buildReference('hooks', hooks, 'Hook');
buildSkill(components, hooks);
buildVersion();

// The written files are addressed absolutely rather than through the working directory, which the marketplace
// manifest lies outside of anyway.
execSync(`npx prettier --write "${__dirname}" "${MARKETPLACE_FILE}"`);
