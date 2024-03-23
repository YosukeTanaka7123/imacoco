module.exports = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],

  semi: false,
  singleQuote: true,
  printWidth: 100,

  // 未使用インポート自動削除のスキップ
  // https://github.com/simonhaenisch/prettier-plugin-organize-imports
  organizeImportsSkipDestructiveCodeActions: false,
}
