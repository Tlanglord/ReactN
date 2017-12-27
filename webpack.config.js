/**
 * Created by dongqiangqiang on 2017/6/16.
 */
var webpack = require('webpack');

module.exports = {
    // 页面入口文件配置
    entry: {
        'main': './client/src/index.js'
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/client/build/',
        filename: '[name].bundle.js',
		publicPath:'/'
    },
    module: {
        // 加载器配置
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(css|less)$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}