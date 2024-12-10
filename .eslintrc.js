/** @type {import("eslint").Linter.Config} */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "amd": true,
    "node": true,
    "es6": true
  },
  "plugins": ["@typescript-eslint", "simple-import-sort", "unicorn"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "next",
    "next/core-web-vitals"
  ],
  "rules": {
    "prefer-promise-reject-errors": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "block" },
      { "blankLine": "always", "prev": "block", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "block-like" },
      { "blankLine": "always", "prev": "block-like", "next": "*" }
    ],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "CallExpression[callee.name='require']",
        "message": "Use import instead of require",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@|components)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.?(css)$"]
        ]
      }
    ],
    "simple-import-sort/exports": "error",
    "react/display-name": "off",
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "kebabCase": true,
        }
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
  "overrides": [
    {
      "files": ["*.js"],
      "rules": {
        "no-restricted-syntax": "off"
      }
    },

  ]
}

