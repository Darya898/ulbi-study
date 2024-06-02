import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";




export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {rules:{
  'no-unused-vars':'warn',
      "no-undef": "warn"
},
  globals:{
    '__IS_DEV__':true,
  }
  }
];