const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add custom resolver settings
config.resolver.sourceExts = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'json',
  'mjs',
  'cjs',
];

// Disable minification for better debugging
config.transformer.minifierPath = require.resolve('metro-minify-terser');
config.transformer.minifierConfig = {
  ecma: 8,
  keep_classnames: true,
  keep_fnames: true,
  module: true,
  mangle: {
    module: true,
    keep_classnames: true,
    keep_fnames: true,
  },
};

module.exports = config;