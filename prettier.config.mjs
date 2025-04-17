/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
const config = {
  printWidth: 80, // Limit lines to 80 characters for readability
  tabWidth: 2, // Use 2 spaces per indentation level
  useTabs: false, // Use spaces, not tabs
  semi: false, // Omit semicolons where possible
  singleQuote: true, // Prefer single quotes for strings
  trailingComma: 'es5', // Trailing commas for cleaner diffs in ES5-compliant structural arrays/objects
  bracketSpacing: true, // Always include spaces inside { curly braces }
  arrowParens: 'always', // Always wrap arrow function arguments in parentheses
  plugins: ['prettier-plugin-tailwindcss'], // Tailwind CSS formatting support
}

export default config
