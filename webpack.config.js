const HtmlWebpakPlugin =  require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path =  require("path");

module.exports =  {
    devtool: 'inline-source-map',
    mode:"development",
    entry:{
        src:"./src/index.js"},
    output:{
        filename:"bundle.js",
        path:path.resolve( __dirname, 'dist')
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
        template:'./src/index.html',
        hash: true,
        inject: true,
    }),

    ],    
    devServer: {
        watchFiles: ["./src/*"],
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        
    }   
}