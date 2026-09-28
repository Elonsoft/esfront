import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import path from 'node:path';
import progress from 'rollup-plugin-progress';
import typescript from 'rollup-plugin-typescript2';
import preserveDirectives from 'rollup-preserve-directives';

const isExternal = (id) => !id.startsWith('.') && !id.startsWith('\0') && !path.isAbsolute(id);

export default {
  input: './src/index.ts',
  external: isExternal,
  output: [
    {
      dir: 'lib/node',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      chunkFileNames: '[name].cjs',
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
