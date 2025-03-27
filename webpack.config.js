const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/index.js',
        styles: './src/index.scss'
    },
    mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        //chunkFilename: 'css/[id].[contenthash].css',
        
        

    }),
  ],
  devServer:{
    //probando para poder usar npx webpack serve
    devMiddleware:{
        writeToDisk: true,
    },

    /*proxy: [
        {
            context: ['/'],
            
        }
    ],*/
    client: {
        overlay: {
            errors: true,
            warnings: false,
            runtimeErrors: true,

        },
    },
    
    compress: true,
    port: 3001,
    open: true,
    hot: false,
    liveReload: true,

    /*static: {
        directory: path.join(__dirname, 'dist'),

    },*/

  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],

  },
  output:{
    clean: true,
  },
};
