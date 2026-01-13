// @ts-check

/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'es5',
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
