const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: [path.resolve(__dirname, './src/loaders/replace-loader'), 'file-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ]
}
