const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        'react-app': './src/react/index.js', // react入口
        'vue-app': './src/vue/index.js' // vue入口
    },
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name].[chunkhash:8].js',
    },
    resolve: {
        modules: [
            'node_modules'
        ],
        extensions: ['.js', '.json'],
        alias: {
            '@src': path.resolve(__dirname, '../src'),
            '@static': path.resolve(__dirname, '../src'),
            'vue': 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', 
                options: {
                    presets: [ "@babel/preset-react" ],
                    plugins: [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }], // es6 修饰器 插件
                        "@babel/plugin-transform-runtime",
                        "@babel/plugin-syntax-dynamic-import", // 支持webpack按需加载 import()方法 插件
                        "@babel/plugin-transform-react-jsx"
                    ]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: 'postcss-loader' },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: 'postcss-loader' },
                    { loader: "less-loader" }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: "css-loader"},
                    { loader: 'postcss-loader' },
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                loader: 'url-loader',
                options: {
                    limit: 20000,
                    outputPath: 'images',
                    name: '[name].[ext]',
                    publicPath: '../images'
                }
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // 公用模块抽离
                common: {
                    chunks: 'async',
                    minSize: 0, // 大于0个字节
                    minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数
                },
                // 第三方库抽离
                vendor: {
                    priority: 1, // 权重
                    test: /node_modules/,
                    chunks: 'initial',
                    minSize: 0, // 大于0个字节
                    minChunks: 1, // 在分割之前，这个代码块最小应该被引用的次数
                }
            }
        }
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        // 输出react html模板
        new HtmlWebpackPlugin({
            template: './src/react/index.html',
            filename: 'index.react.html',
            chunks:[ 'react-app' ]
        }),
        // 输出vue html模板
        new HtmlWebpackPlugin({
            template: './src/vue/index.html',
            filename: 'index.vue.html',
            chunks:[ 'vue-app' ]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: '[name].css?v=[contenthash:8]'  // use contenthash *
        }),
    ]
};