const baseConfig = require("@teambit/react/prettier/prettier.config");
module.exports = {
  ...baseConfig,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  printWidth: 120,
  proseWrap: "always",
  // overrides for JSX react items
  jsxSingleQuote: false,
  bracketSpacing: true,
  arrowParens: 'always',
  jsxBracketSameLine: false,
  // overrides for import orders. By default third party imports are at the top
  // For us we do react at the top -> third party -> @hallmark -> local
  importOrder: ['^react', '<THIRD_PARTY_MODULES>', '^@testing-library/(.*)$', '^@hallmark/(.*)$', '^[./]'],
  importOrderSeparation: false,
};
