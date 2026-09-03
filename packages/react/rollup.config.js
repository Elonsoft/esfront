import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import typescript from 'rollup-plugin-typescript2';
import preserveDirectives from 'rollup-preserve-directives';

export default {
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
      include: ['*.ts', '*.tsx', '**/*.ts', '**/*.tsx'],
    }),
    commonjs(),
    preserveDirectives(),
    progress(),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }

    warn(warning);
  },
};
