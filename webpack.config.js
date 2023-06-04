const webpack = require('webpack');
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: {
        index: './src/weather'
    },
    output: {
        filename: 'weather.js'
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: [{loader: 'url-loader', options: {minetype: 'image/png'}}]},
        ]
    },
    devServer: {
        static: ('src'),
        hot: true,
        open: true,
        port: 8000
    },
    plugins: [
        new Dotenv()
    ],
    resolve: {
        fallback: {
            "crypto": false,
        }
    }
}