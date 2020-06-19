const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    plugins: [
        
    ],
});