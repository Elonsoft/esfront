import external from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
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
    external(),
    typescript({
      tsconfig: './tsconfig.lib.json',
      useTsconfigDeclarationDir: true,
      include: ['*.ts', '**/*.ts'],
    }),
  ],
};
