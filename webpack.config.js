const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const argv = require('yargs').argv
const path = require('path')
const fs = require('fs')

module.exports = (options) => {
    const env = require('./env/' + options.config + '.js')
    const buildDir = 'dist'
    const isLocal = options.local
    const minify = {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true, // 删除HTML中的注释
        collapseWhitespace: true, // 删除空白符与换行符
        collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, // 删除script上的type
        removeStyleLinkTypeAttributes: true // 删除style上的type
    }
    const rules = [
        {
            test: /\.vue$/,
            use: 'vue-loader'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        data: fs.readFileSync('./src/sass/base/variable.scss')
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]',
                        limit: 1000
                    }
                }
            ]
        }
    ]
    const plugins = [
        new CleanWebpackPlugin(buildDir, {
            root: __dirname // 需要指定根目录，才能删除项目外的文件夹
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // 处理html模板
        new HtmlWebpackPlugin({
            template: './src/vue/index.html',
            filename: isLocal ? 'index.html' : 'index_new.html',
            minify,
            host: env,
            alwaysWriteToDisk: true
        }),
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, buildDir)
        })
    ]

    return {
        mode: isLocal ? 'development' : 'production',
        entry: {
            app: './src/vue'
        },
        output: {
            publicPath: env.host.cdn + (options.hot ? ':' + env.port : '') + `/`,
            path: path.resolve(__dirname, buildDir),
            filename: isLocal ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',
            chunkFilename: isLocal ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js' // 本地开发如果使用hash，watch会影响到公用js
        },
        module: {
            rules
        },
        plugins,
        resolve: {
            alias: {
                env: path.resolve(__dirname, 'env/' + options.config + '.js')
            }
        },
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        },
        devServer: {
            host: env.host.cdn.replace('//', ''),
            port: env.port,
            hot: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
}
