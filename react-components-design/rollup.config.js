/*
 * @Author: wangDong Xu
 * @Date: 2022-01-15 23:01:20
 * @LastEditors: wangDong Xu
 * @LastEditTime: 2022-01-16 11:05:52
 * @Description: file content
 * @FilePath: /react-component-library/react-components-design/rollup.config.js
 * @motto: It's not hard to give up, but it must be cool to persist.
 */

import typescript from 'rollup-plugin-typescript2';  // 打包 TS 文件，可生成 *.d.ts 文件
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 打包模块化
import commonjs from '@rollup/plugin-commonjs'; // 用于打包 comjs
import babel from '@rollup/plugin-babel';  // babel 打包工具
import replace from '@rollup/plugin-replace'; // 代码替换的工具
import progress from 'rollup-plugin-progress'; // 打包进度条
import postcss from 'rollup-plugin-postcss'; // 打包 scss
import { terser } from 'rollup-plugin-terser'; // 压缩工具
import appendImportCSS from './plugins/append-import-css'; // 把 css 注入到对应组件当中

const extensions = ['.js', '.ts', '.tsx'];
const isProduction = process.env.NODE_ENV === 'production';

export default {
  treeshake: { // 打包时将没有用到的代码移除
    moduleSideEffects: false,
  },
  input: { // 按需打包入口
    index: './components',
    'nav-bar/index': './components/nav-bar'
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
    },
  ],
  plugins: [
    typescript(),
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development'
        ),
      },
      preventAssignment: true,
    }),
    nodeResolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
    }),
    postcss({ // 把 css 输出为单独的文件
      extract: true,
    }),
    appendImportCSS(),
    isProduction && terser({ format: { comments: false } }),
    progress()
  ],
  external: ['react'],
};
