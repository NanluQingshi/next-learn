/*
 * @Author: NanluQingshi
 * @Date: 2025-07-12 23:06:02
 * @LastEditors: NanluQingshi
 * @LastEditTime: 2025-07-12 23:14:23
 * @Description: 
 */
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";

// TODO: 看看项目中 eslint 和 prettier 怎么配置，后续加上
export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js, prettier }, 
    extends: ["js/recommended"],
    rules: {
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off'
    } 
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    languageOptions: { 
      globals: {...globals.browser, ...globals.node} 
    } 
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
