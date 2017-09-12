const path = require('path');

module.exports = {
    entry: './src/index.js',
    context: __dirname,
    output: {
        filename: 'pretty-json.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules|bower_components/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                babelrc: false,
                presets: [
                    'env'
                ]
            }
        }]
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true,
        noInfo: true
    }
};