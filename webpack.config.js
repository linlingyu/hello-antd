const path = require('path');
    webpack = require('webpack'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'views', 'index.tsx'),

    output: {
        filename: '[name].js',
        publicPath: '${basePath}/',
        path: path.join(__dirname, 'out', 'views')
    },

    devtool: 'source-map',

    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192 // byte
                }
            }]
        }, {
            test: /\.(less|css)$/i,
            // use: ['style-loader', 'css-loader', 'less-loader']
            use: [{loader: 'style-loader'}, {loader: 'css-loader'}, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.(ts|tsx)$/i,
            include: [path.join(__dirname, 'src', 'views')],
            use: 'babel-loader'
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    plugins: [
        new webpack.ProgressPlugin(),
        new webpack.NamedModulesPlugin(),//显示模块的相对路径
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Check For updates'
        })
    ]
};