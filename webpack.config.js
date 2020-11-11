const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        port: 1706,
        open: true,
        host: '0.0.0.0'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './src/js/main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new copyWebpackPlugin({
            patterns:[
                {
                    from:(__dirname, './src/styles/*.css'),
                    to: './src/css/[name].css'
                }
            ]
        })
    ]
}