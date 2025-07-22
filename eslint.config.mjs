import base from '@nice-move/all-in-base/eslint';
import ava from 'eslint-plugin-ava';

export default [
  ...base,
  {
    files: ['test/**/*.mjs'],
    ...ava.configs['flat/recommended'],
  },
  {
    ignores: ['test/snapshots/**'],
  },
];
