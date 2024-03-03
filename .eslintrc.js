module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json", // Add this line, adjust the path as necessary
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "prettier/prettier": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
