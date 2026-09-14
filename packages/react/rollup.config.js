import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import typescript from 'rollup-plugin-typescript2';
import preserveDirectives from 'rollup-preserve-directives';

const BARREL = '/theming/DefaultPropsProvider/index.ts';

/**
 * Redirects the default props barrel to its server counterpart. The swap is limited to that single module, so every
 * other import, including the one the server provider makes to the client provider, resolves as usual. Failing to match
 * is fatal: the build would otherwise emit a copy of the client build under lib/react-server and ship a runtime crash.
 */
const swapServerModules = () => {
  let swapped = false;

  return {
    name: 'swap-server-modules',
    buildStart() {
      swapped = false;
    },
    async resolveId(source, importer, options) {
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });

      if (!resolved || resolved.external) {
        return resolved;
      }

      if (resolved.id.replace(/\\/g, '/').endsWith(BARREL)) {
        swapped = true;
        return resolved.id.replace(/index\.ts$/, 'index.server.ts');
      }

      return resolved;
    },
    buildEnd(error) {
      if (error || swapped) {
        return;
      }

      throw new Error(
        `swap-server-modules never matched src${BARREL}, so lib/react-server would be a copy of the client build and ` +
          'would call useContext in the RSC layer. Check that the barrel still exists at that path and that the plugin ' +
          'runs before the resolver that handles it.'
      );
    },
  };
};

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
