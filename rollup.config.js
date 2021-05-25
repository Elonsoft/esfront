import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve(),
    typescript({ tsconfig: './tsconfig.lib.json' }),
    commonjs(),
    copy({
      targets: [{ src: ['./src/overrides.d.ts'], dest: './lib/' }]
    })
  ]
};
