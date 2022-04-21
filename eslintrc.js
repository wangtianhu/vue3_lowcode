module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:vue/recommended", "@vue/prettier"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 6,
        sourceType: "module",
    },
    plugins: ["prettier", "vue"],
    rules: { "prettier/prettier": "error" },
}
