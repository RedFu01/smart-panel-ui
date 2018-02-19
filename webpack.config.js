const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

const entry = [
    './src/App.js'
];

const webpackModule = {
    rules: [
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'node_modules/react-happycar-ui'),
            use: 'babel-loader'
        },
        {
            test: /\.js$/,
            exclude: path.resolve(__dirname, 'node_modules'),
            use: 'babel-loader'
        },
        {
            test: /\.(jpe?g|png|gif|eot|woff|woff2|svg|ttf)$/,
            loader: 'file-loader'
        },
        {
            test: [/\.scss$/, /\.css$/],
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                ]
            })
        }
    ]
};

const webpackPlugins = [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({
        template: 'index.html',
        inject: true,
        minify: {
            minifyCSS: true,
            minifyJS: true
        }
    })
];

if (NODE_ENV === 'production') {
    webpackModule.rules.push({
        enforce: 'pre',
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader'
    });
    webpackPlugins.push(
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        })
    );
    entry.unshift('babel-polyfill');
    entry.unshift('whatwg-fetch');
}

module.exports = {
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: {
            index: '/index.html',
            disableDotRule: true
        },
        compress: true
    },
    module: webpackModule,
    plugins: webpackPlugins,
    devtool: NODE_ENV === 'development' ? '#cheap-module-eval-source-map' : false
};