import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import typescript from 'rollup-plugin-typescript2';
import preserveDirectives from 'rollup-preserve-directives';

/**
 * Redirects the default props barrel to its server counterpart. The swap is limited to that single module, so every
 * other import, including the one the server provider makes to the client provider, resolves as usual.
 */
const swapServerModules = () => ({
  name: 'swap-server-modules',
  async resolveId(source, importer, options) {
    const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });

    if (!resolved || resolved.external) {
      return resolved;
    }

    if (resolved.id.endsWith('/theming/DefaultPropsProvider/index.ts')) {
      return resolved.id.replace(/index\.ts$/, 'index.server.ts');
    }

    return resolved;
  },
});

const onwarn = (warning, warn) => {
  if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
    return;
  }

  warn(warning);
};

const include = ['*.ts', '*.tsx', '**/*.ts', '**/*.tsx'];

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'lib/node',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
      {
        dir: 'lib',
        format: 'es',
        exports: 'named',
        sourcemap: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.lib.json',
        useTsconfigDeclarationDir: true,
        include,
      }),
      commonjs(),
      preserveDirectives(),
      progress(),
    ],
    onwarn,
  },
  {
    input: './src/index.ts',
    output: [
      {
        dir: 'lib/react-server',
        format: 'es',
        exports: 'named',
        sourcemap: false,
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      swapServerModules(),
      external(),
      resolve(),
      typescript({
        tsconfig: './tsconfig.lib.json',
        cacheRoot: 'node_modules/.cache/rpt2-react-server',
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
        },
        include,
      }),
      commonjs(),
      preserveDirectives(),
      progress(),
    ],
    onwarn,
  },
];
