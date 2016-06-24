/* eslint-env node */

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ctxDir = path.resolve(__dirname);
const srcDir = path.resolve(__dirname, 'src');
const vendorDir = path.resolve(__dirname, 'vendor');
const outDir = path.resolve(__dirname, 'dist');

module.exports = {
    devtool: 'cheap-module-source-map',
    debug: true,
    context: ctxDir,
    entry: {
        app: [ srcDir ]
    },
    output: {
        path: outDir,
        filename: '[hash].min.js'
    },
    resolve: {
        alias: {
            '~': srcDir,
            '^': vendorDir
        },
        root: srcDir,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules']
    },
    postcss: () => [autoprefixer],
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: srcDir,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.less$/,
                exclude: srcDir,
                loaders: ['style', 'css', 'postcss', 'less']
            },
            {
                test: /\.css$/,
                include: srcDir,
                loaders: ['style', 'css?modules&localIdentName=[local]-[hash:base64:5]', 'postcss']
            },
            {
                test: /\.less$/,
                include: srcDir,
                loaders: ['style', 'css?modules&localIdentName=[local]-[hash:base64:5]', 'postcss', 'less']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(eot|woff|ttf|svg|jpg|ico)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
