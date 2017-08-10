const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = (options) => {

    const env = require('./env/' + options.config + '.js');
    const buildDir = env.DIR_BUILD;
    const isLocal = options.local;

    return {
        entry: {
            app: './src/vue'
        },

        output: {
            // publicPath: env.HOST_CDN + env.HTML_BASE + '/',
            publicPath: '/',
            path: path.resolve(__dirname + '/' + buildDir),
            filename: isLocal ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js',
            chunkFilename: isLocal ? 'js/[name].js' : 'js/[name]-[chunkhash:8].js' // 本地开发如果使用hash，watch会影响到公用js
        },

        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                // ['es2015', {modules: false}],
                                'es2015'
                                // 'stage-0'
                            ]
                        }
                    }]
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract(['css-loader'])
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
        },
        // externals: {
        //     'vue': 'vue',
        //     'vue-router': 'vue-router'
        // },
        plugins: [
            //new webpack.NoErrorsPlugin()
            //new webpack.optimize.CommonsChunkPlugin({
            //    name: 'base.0'
            //})
            new ExtractTextPlugin(isLocal ? 'css/[name].css' : 'css/[name]-[chunkhash:8].css'),
            new CleanWebpackPlugin(buildDir, {
                root: __dirname // 需要指定根目录，才能删除项目外的文件夹
            }),

            // 处理html模板
            new HtmlWebpackPlugin({
                template: './src/vue/index.html',
                filename: isLocal ? 'index.html' : 'index_new.html',
                minify: {    //压缩HTML文件
                    // removeComments: true,    //移除HTML中的注释
                    // collapseWhitespace: false    //删除空白符与换行符
                },
                host: env
            })

            // 复制文件
            //new TransferWebpackPlugin([
            //    { from: './src/assets', to: 'assets' }
            //])
        ]
    }
};