import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"], // Применять ко всем JS-файлам
    languageOptions: {
        ecmaVersion: 2022, // Версия ECMAScript
        sourceType: "module", // Использование ES-модулей
        globals: {
            ...globals.browser, // Глобальные переменные браузера
            ...globals.node, // Глобальные переменные Node.js
        },
    },
    rules: {
        "no-console": "warn", // Предупреждение для console
        "semi": ["error", "always"], // Требовать точку с запятой
        "quotes": ["error", "single"], // Использовать двойные кавычки
    },
    plugins: ["prettier"],
    ignores: ["node_modules/", "dist/"], // Игнорируемые папки
},
];