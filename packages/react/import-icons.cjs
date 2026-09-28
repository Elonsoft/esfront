/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const { execSync } = require('node:child_process');

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv))
  .version(false)
  .command(
    '<directory>',
    'Import svg icons from the given directory.',
    () => {
      /**/
    },
    (argv) => {
      console.info(argv);
    }
  )
  .demandCommand(1)
  .option('size', {
    alias: 's',
    type: 'number',
    description: 'Size of the icon',
  })
  .parse();

const directory = path.resolve(argv._[0]);
const size = argv.size;

const ICONS_DIRECTORY = path.resolve(__dirname, 'src/icons');

const filenames = fs.readdirSync(directory);

const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const getComponentName = (filename) => {
  return `Icon${path
    .parse(filename)
    .name.split('-')
    .map((segment) => capitalize(segment).replace('.', 'x'))
    .join('')}`;
};

filenames.forEach((filename) => {
  const componentName = getComponentName(filename);
  const svg = fs.readFileSync(path.resolve(directory, filename), { encoding: 'utf8' });

  const content = `
import { SvgIcon, SvgIconProps } from '../components/SvgIcon';

export const ${componentName} = (props: SvgIconProps) => {
  return (
    <SvgIcon size="${size}px" viewBox="0 0 ${size} ${size}" {...props}>
      ${/<svg.*?>([\s\S]*)<\/svg>/
        .exec(svg)[1]
        .replaceAll('stroke-opacity="0.16"', '')
        .replaceAll('stroke-opacity="0.24"', '')
        .replaceAll('fill-opacity="0.16"', '')
        .replaceAll('fill-opacity="0.24"', '')
        .replaceAll('#BF7348', 'currentColor')
        .replaceAll('#47A3FF', 'currentColor')
        .replaceAll('#FFB93B', 'currentColor')
        .replaceAll('black', 'currentColor')
        .replaceAll('rgba(0, 0, 0, 0.16)', 'currentColor')}
    </SvgIcon>
  );
};
`;

  fs.writeFileSync(path.resolve(ICONS_DIRECTORY, `${componentName}.tsx`), content);
});

const index = fs
  .readdirSync(path.resolve(__dirname, ICONS_DIRECTORY))
  .filter((filename) => filename !== 'index.ts')
  .map((filename) => {
    const componentName = path.parse(filename).name;
    return `export { ${componentName} } from './${componentName}';`;
  });

fs.writeFileSync(path.resolve(ICONS_DIRECTORY, 'index.ts'), index.join('\n'));

execSync('npx eslint src/icons --fix && npx prettier --write src/icons', { stdio: 'inherit' });
