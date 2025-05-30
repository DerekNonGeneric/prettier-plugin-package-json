import { resolve } from 'node:path';

export const config = {
  target: 'node20',
  entry: {
    index: './src/index.mjs',
  },
  output: {
    path: 'dist',
    module: true,
    library: {
      type: 'module',
    },
  },
  resolve: {
    alias: {
      cosmiconfig: resolve('src/cosmiconfig.cjs'),
    },
  },
  externals: {
    'prettier/parser-babel.js': 'node-commonjs prettier/parser-babel.js',
  },
  chain(chain) {
    chain.resolve.extensions.add('.json');
  },
};
