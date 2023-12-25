const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: false,
        port: 9000,
        open: true,
        devMiddleware: {
            writeToDisk: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    // Disables attributes processing
                    minimize: true,
                },
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: /custom\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader",
                    "sass-loader"]
            },
            {
                test: /custom\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'rtlcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./images/[name][ext]"
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]"
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
<<<<<<< HEAD
            filename: "checkout.html",
            template: "./src/checkout.html"
        }),
        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html"
=======
            filename: "product.html",
            template: "./src/product.html"
>>>>>>> 1a941935939b0c3a546c75a33ebea3f8f8eca10a
        }),
        new HtmlWebpackPlugin({
            filename: "payment.html",
            template: "./src/payment.html"
        }),
        new HtmlWebpackPlugin({
<<<<<<< HEAD
            filename: "product.html",
            template: "./src/product.html"
=======
            filename: "contact.html",
            template: "./src/contact.html"
>>>>>>> 1a941935939b0c3a546c75a33ebea3f8f8eca10a
        }),
        new HtmlWebpackPlugin({
            filename: "search.html",
            template: "./src/search.html"
        }),
<<<<<<< HEAD
=======
        new HtmlWebpackPlugin({
            filename: "checkout.html",
            template: "./src/checkout.html"
        }),
>>>>>>> 1a941935939b0c3a546c75a33ebea3f8f8eca10a
        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new CssMinimizerPlugin()
    ]
};