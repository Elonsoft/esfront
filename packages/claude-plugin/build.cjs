/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const { execSync } = require('node:child_process');

const typedoc = require('../react/src/typedoc.json');

const SRC_DIR = path.resolve(__dirname, 'src');
const SKILLS_DIR = path.resolve(__dirname, 'skills');

const PACKAGE_FILE = path.resolve(__dirname, 'package.json');
const PLUGIN_FILE = path.resolve(__dirname, '.claude-plugin/plugin.json');
const PLUGIN_TEMPLATE_FILE = path.resolve(SRC_DIR, 'plugin.json');

/** `ReflectionKind.Function`, the kind typedoc gives to a component. */
const KIND_FUNCTION = 64;

/** The typedoc kinds of a value export: `Variable`, `Function` and `Class`. */
const VALUE_KINDS = [32, KIND_FUNCTION, 128];

/** The directories that hold assets or translations rather than components. */
const IGNORED_DIRS = /\/(icons|locale|locales)\//;

/** The files of the package itself, as opposed to the ones a re-export pulls in from a dependency. */
const OWN_SOURCE = /\/src\//;

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

  // A deprecation is what an entry is replaced by, so it only reads once the entry itself has been described. The
  // marker is bold so that it survives a table skimmed rather than read.
  const deprecated = (comment.blockTags || [])
    .filter((tag) => tag.tag === '@deprecated')
    .map((tag) => `**Deprecated.** ${joinContent(tag.content)}`)
    .join(' ');

  return normalize([summary, deprecated, see].filter(Boolean).join(' '));
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
 * Writes the plugin manifest from its template, carrying the package version over so that the version the
 * marketplace resolves from npm and the one the manifest reports cannot drift apart.
 */
function buildManifest() {
  const { version } = readJSON(PACKAGE_FILE);

  fs.mkdirSync(path.dirname(PLUGIN_FILE), { recursive: true });
  writeJSON(PLUGIN_FILE, { ...readJSON(PLUGIN_TEMPLATE_FILE), version });
}

/**
 * Copies the skill sources into the plugin. Only the sources are tracked, so the copy both seeds the skills that
 * need no generation and clears whatever an earlier build left behind.
 */
function buildSkills() {
  fs.rmSync(SKILLS_DIR, { recursive: true, force: true });
  fs.cpSync(path.resolve(SRC_DIR, 'skills'), SKILLS_DIR, { recursive: true });
}

/** Reads a template from the skill sources. */
function readTemplate(file) {
  return fs.readFileSync(path.resolve(SRC_DIR, `skills/esfront-react/${file}`), { encoding: 'utf8' });
}

/** Writes a built file into the skill. */
function writeSkill(file, content) {
  fs.writeFileSync(path.resolve(SKILLS_DIR, `esfront-react/${file}`), content);
}

/**
 * Fills a placeholder in. The replacement is passed as a function rather than as a string, so that a `$` in a doc
 * comment is written out as it stands instead of being read as a replacement pattern.
 */
function fill(template, placeholder, value) {
  return template.replace(placeholder, () => value);
}

function buildReference(reference, names, header) {
  const result = fill(
    readTemplate(`references/${reference}.md`),
    `**${reference.toUpperCase()}_TABLE**`,
    buildTable(header, names)
  );

  writeSkill(`references/${reference}.md`, result);
}

function buildSkill(components, hooks) {
  let result = readTemplate('SKILL.md');

  result = fill(result, '**COMPONENTS_LIST**', components.join(', '));
  result = fill(result, '**HOOKS_LIST**', hooks.join(', '));

  writeSkill('SKILL.md', result);
}

/**
 * Lists the exported components: a function named in PascalCase and declared in the `.tsx` file named after it. That
 * is what separates a component from the context modules and the type files next to it, and it holds wherever the
 * component lives — `DefaultPropsProvider` sits under `theming/` rather than under `components/`. The case is what
 * rules out a hook such as `useScrollLock`, which is written in a `.tsx` file of its own as well.
 */
const components = [
  ...new Set(
    typedoc.children
      .filter((item) => item.kind === KIND_FUNCTION && /^[A-Z]/.test(item.name))
      .filter((item) => {
        const file = getSourceFile(item);

        return OWN_SOURCE.test(file) && !IGNORED_DIRS.test(file) && file.endsWith(`/${item.name}.tsx`);
      })
      .map((item) => item.name)
  ),
].sort();

/**
 * Lists the exported hooks. They cannot be read from `hooks/` alone: a hook tied to a single component, such as
 * `useDialogStack`, lives next to that component under `components/`, and `useDefaultProps` under `theming/`, yet
 * both are re-exported from the package root.
 */
const hooks = [
  ...new Set(
    typedoc.children
      .filter((item) => VALUE_KINDS.includes(item.kind) && /^use[A-Z]/.test(item.name))
      .filter((item) => OWN_SOURCE.test(getSourceFile(item)))
      .map((item) => item.name)
  ),
].sort();

buildSkills();
buildReference('components', components, 'Component');
buildReference('hooks', hooks, 'Hook');
buildSkill(components, hooks);
buildManifest();

// The written files are addressed absolutely rather than through the working directory, which is the repository
// root when the build runs through the workspace.
execSync(`npx prettier --write "${SKILLS_DIR}" "${PLUGIN_FILE}"`);
