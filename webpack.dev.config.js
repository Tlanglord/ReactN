/**
 * Created by dongqiangqiang on 2017/6/16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 页面入口文件配置
    entry: {
        // 'webpack/hot/poll?1000',
        // 'webpack/hot/dev-server',
       'main':[ './client/src/index.js'],
        vendor: ['react']
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/client/build/',
        filename: '[name].bundle.js',
        publicPath: '/build/',
        chunkFilename: '[name].js' //注意这里，用[name]可以自动生成路由名称对应的js文件
    },
    // devServer: {
    //     contentBase: './'
    // },
    module: {
        // 加载器配置
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
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
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'vendor.js'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/client/index.html"//new 一个这个插件的实例，并传入相关的参数
        }),

    ]
}