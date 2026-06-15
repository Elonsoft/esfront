import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import typescript from 'rollup-plugin-typescript2';

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
      banner: "'use client';",
    },
    {
      dir: 'lib',
      format: 'es',
      exports: 'named',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      banner: "'use client';",
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({ tsconfig: './tsconfig.lib.json', useTsconfigDeclarationDir: true }),
    commonjs(),
    copy({
      targets: [{ src: ['./src/overrides.d.ts'], dest: './lib/' }],
    }),
    progress(),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return;
    }

    warn(warning);
  },
};
