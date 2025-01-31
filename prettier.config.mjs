/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80, // Max line length before wrapping
  tabWidth: 2, // Number of spaces per indentation level
  useTabs: false, // Use spaces instead of tabs
  semi: false, // Omit semicolons
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'es5', // Add trailing commas where valid in ES5
  bracketSpacing: true, // Print spaces between brackets in object literals
  arrowParens: 'always', // Always include parentheses around arrow function arguments
}

export default config;