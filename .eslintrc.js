// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended', // Интеграция Prettier с ESLint
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/multi-word-component-names': 'off', // Отключаем требование многословных имен для компонентов Vue
    'prettier/prettier': 'error', // Применяем правила Prettier как ошибки
  },
}
