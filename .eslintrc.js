module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: [
    'import',
    'prettier',
    'unused-imports',
    'react',
    'react-native',
    'react-hooks',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          {
            prefer: 'type-imports',
            fixStyle: 'inline-type-imports',
          },
        ],
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow',
          },
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^[A-Z]Interface',
              match: false,
            },
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        'no-return-await': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': 'warn',
    'padding-line-between-statements': [
      'warn',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: 'directive', next: '*'},
      {blankLine: 'any', prev: 'directive', next: 'directive'},
      {blankLine: 'always', prev: 'import', next: '*'},
      {blankLine: 'any', prev: 'import', next: 'import'},
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
    ],
    'no-useless-catch': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-unused-modules': 'error',
    'import/namespace': 'error',
    'import/export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'no-nested-ternary': 'warn',
    'spaced-comment': ['warn', 'always', {exceptions: ['-', '+']}],
    'no-console': 'warn',
    'default-param-last': 'warn',
    curly: ['warn', 'all'],
    'prefer-arrow-callback': 'warn',
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    'react/prop-types': 'off',
    'react-native/no-unused-styles': 1,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-inline-styles': 1,
    'react/jsx-no-bind': 'off',
    'react/require-optimization': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'max-params': ['error', 3],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    'react-native/react-native': true,
  },
}
