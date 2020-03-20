# webpack-rtlcss-plugin

Webpack plugin that takes a `.css` chunk and processes RTL (right to left) conversion. Unlike other Webpack RTL plugins, this plugin __DOES NOT__ create a separate `.css` file.

Uses [rtlcss] under the hood. For more information on how to utilize [rtlcss] check out the [rtlcss docs](https://rtlcss.com/learn/).

## Install

```sh
npm install @godaddy/webpack-rtlcss-plugin --save-dev
```

## Usage

```js
const RTLPlugin = require('@godaddy/webpack-rtlcss-plugin');

// Within Webpack config

plugins: [
  ...other webpack plugins
  new RTLPlugin()
],
```

## Example

Check out the [test webpack config](./test/unit/webpack.config.js) to see an example of how `@godaddy/webpack-rtlcss-plugin` works with `mini-css-extract-plugin`.

[rtlcss]: https://github.com/MohammadYounes/rtlcss
