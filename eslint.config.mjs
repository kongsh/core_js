import globals from 'globals';
import pluginJs from '@eslint/js';

const types = {
  isObject: true,
  isArray: true,
  isString: true,
  isNumber: true,
  isNull: true,
  isUndefined: true,
  isFunction: true,
};

const dom = {
  getNode: true,
  getAttr: true,
  setAttr: true,
  attr: true,
  insertLast: true,
};

const error = {
  typeError: true,
  syntaxError: true,
  refError: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...dom,
        ...error,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
