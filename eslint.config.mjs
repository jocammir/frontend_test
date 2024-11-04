import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  pluginJs.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    files: ["**/*.jsx", "**/*.js"],
    plugins: {
      react: pluginReact,
      import: pluginImport,
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        pragma: "h",
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "preact/react-in-jsx-scope": "off",
      "preact/prop-types": "off",
      "no-unused-vars": "warn",
      "object-curly-spacing": ["error", "always"],
      indent: [
        "warn",
        2,
        {
          SwitchCase: 1,
          flatTernaryExpressions: false,
        },
      ],
      "no-magic-numbers": "off",
      "no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true },
      ],
      "no-undef": "error",
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "brace-style": ["error", "stroustrup"],
      "arrow-parens": ["error", "always"],
      "linebreak-style": ["error", "unix"],
      "jsx-quotes": ["error", "prefer-double"],
      "no-trailing-spaces": "error",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "import/order": [
        "error",
        {
          groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
        },
      ],
      "prettier/prettier": [
        "warn",
        {
          printWidth: 150,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          trailingComma: "all",
          bracketSpacing: true,
          jsxBracketSameLine: true,
          arrowParens: "always",
          endOfLine: "lf",
        },
      ],
    },
  },
];
