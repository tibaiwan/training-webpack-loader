const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',
    mode: 'production',
    output: {
        filename: '[name]_[hash:6].js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './src/loaders/async-replace-loader'),
                        options: {
                            targetWord: '你好',
                            replaceWord: '我也好',
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './src/loaders/replace-loader'),
                        options: {
                            targetWord: 'Hello',
                            replaceWord: '你好',
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new CleanWebpackPlugin(),
    ]
}
