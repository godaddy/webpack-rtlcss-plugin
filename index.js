const { ConcatSource } = require('webpack-sources');
const path = require('path');
const rtlcss = require('rtlcss');

const PluginName = 'WebpackRTLCSSPlugin';

/**
 * Webpack Plugin to operate Right-to-Left operations over .css
 */
class WebpackRTLCSSPlugin {

  /**
   * @typedef {import('rtlcss').ConfigOptions} RTLCSSOptions
   * @typedef {import('webpack').Compiler} WebPackCompiler
   */
  /**
   * Create an instance of the plugin
   *
   * @param {Object} [options] The `rtlcss` options.
   * @param {RTLCSSOptions} [options.options] See https://rtlcss.com/learn/usage-guide/options/
   * @param {Object|string[]} [options.plugins] See https://rtlcss.com/learn/extending-rtlcss/writing-a-plugin/
   */
  constructor(options = {}) {
    this.options = {
      options: options.options,
      plugins: options.plugins
    };
  }

  /**
   * Apply the plugin
   *
   * @param {WebPackCompiler} compiler The WebPack compiler
   */
  apply(compiler) {
    compiler.hooks.emit.tapAsync(PluginName, async (compilation, cb) => {
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach((asset) => {

          // Ignore chunks that are not CSS
          if (path.extname(asset) !== '.css') {
            return;
          }

          const baseSource = compilation.assets[asset].source();
          const rtlSource = rtlcss.process(baseSource, this.options.options, this.options.plugins);
          compilation.assets[asset] = new ConcatSource(rtlSource);
        });
      });
      cb();
    });
  }
}

module.exports = WebpackRTLCSSPlugin;
