const HtmlWebpakPlugin =  require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path =  require("path");

module.exports =  {
    devtool: 'inline-source-map',
    mode:"development",
    entry:{
        main:"./src/index.js",
        ErrorPage:"./src/ErrorPage.js"
    },
    output: {

        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },   
    resolve: {
        extensions: ['.ts', '.js'],
      },
    devServer: {
        // watchFiles: ["./*"],
        // port: 3000,
        // open: true,
        hot: true,
        historyApiFallback:true,
        liveReload:true,
        // allowedHosts: 'all',
        static:"./dist"
    },
    module:{
        rules:[
        { 
            test:/\.(js|ts)$/,
            exclude:/node_nmodules/,
            loader:"babel-loader"
        },
        {
            test:/\.(s(a|c)ss)$/,
            use:[
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: "sass-loader",
                    options: {
                    sourceMap: false,
                   }
                }
            ]        
        },
        {
            test:/\.(png|jpg|gif)$/,
            use:{
                loader:'url-loader'
            }
        },
        {
            test: /\.tsx?/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins:[
    new MiniCssExtractPlugin(),
    new HtmlWebpakPlugin({
        tittle:"main",
        template: __dirname + '/src/index.html',
        hash: true,
        inject: true,
        chunks:['main'],
        filename:"index.html"
    }),
    new HtmlWebpakPlugin({
        tittle:"ErrorPage",
        template:__dirname + '/src/ErrorPage/index.html',
        hash: true,
        inject: true,
        chunks:['ErrorPage'],
        filename:"./Proyectos/ErrorPage.html"

    })
    ] 
}