/**
 * Created by dongqiangqiang on 2017/6/16.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 页面入口文件配置
    entry: {
        'main': './client/src/index.js',
        // 'vendor': ['react']
    },
    // 入口文件输出配置
    output: {
        path: __dirname + '/client/dist/',
        filename: 'js/'+ '[name].bundle.js',
		publicPath:'./',
        chunkFilename: 'js/'+ '[name].js' //注意这里，用[name]可以自动生成路由名称对应的js文件
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            output: {
                comments: false,
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: 'js/vendor.js'
        }),
        new HtmlWebpackPlugin({
            filenae: 'index.html',
            inject: 'body',
            template: __dirname + "/client/template.html"//new 一个这个插件的实例，并传入相关的参数
        }),
    ]
}