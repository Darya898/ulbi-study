import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import i18next from "i18next";




export default [

  // {languageOptions: {  ecmaVersion: 6}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        '__IS_DEV__': "writable",
        "__dirname": "writable"
      },
    },
  },

  {  plugins:{i18next},},
  {
    rules:{
      'no-unused-vars':'warn',
      "no-undef": "warn",
      "@typescript-eslint/no-unused-vars":"warn",
      "react/react-in-jsx-scope": "off"
},

  }
];