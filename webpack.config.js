const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')

function generateHtmlPlugins(templateDir) {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.map(item => {
        const parts = item.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
            inject: false,
            title: `${name}`
        })
    })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views');

module.exports = {
    entry: [
        './src/js/index.js',
        './src/sass/style.sass'
    ],
    output: {
        filename: './js/bundle.js'
    },
    devtool: "source-map",
    externals: {
        $: 'jquery',
        jQuery: 'jquery'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '../',
                        name: 'img/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: '../',
                        name: `fonts/[name].[ext]`
                    }
                }
            },
            {
                test: /\.(sass|scss|css)$/,
                include: path.resolve(__dirname, 'src/sass'),
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                minimize: true,
                            }
                        },
                        {
                            loader: "resolve-url-loader"
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => [require('autoprefixer')({
                                    'browsers': ['> 1%', 'last 2 versions']
                                })],
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.pug$/,
                loader: ['pug-loader'],
                // options: {
                //     pretty: true
                // }
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/html/includes'),
                use: ['raw-loader', 'resolve-url-loader']
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Popper: 'popper.js/dist/umd/popper.js'
        }),
        new ExtractTextPlugin({
            filename: './css/style.bundle.css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin()
    ].concat(htmlPlugins)
};
