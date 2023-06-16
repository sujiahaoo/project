const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require('webpackbar');
// import jQuery from "jquery";
module.exports={
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"main.[hash:8].js"
    },

    module: {
        rules: [
         
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
          },
        
          
          {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader","less-loader"],
          },
           
        ],
      },
    mode:process.env.NODE_ENV,
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"./src")
        }
    },
    externals: {
        jquery: 'jQuery',
        lodash:"_"
      },
    devServer:{
        open:true,
        // 配置前端请求代理
        proxy:{
            // 在开发环境下面代理的目标:http://127.0.0.1:3000
            // 在生产环境下面代理的目标:http://api.ccoo8o2.top:3000
            "^/api":{
                target: process.env.NODE_ENV === "development"
                ? "http://127.0.0.1:3000"
                : process.env.NODE_ENV === "production"
                ? "http://api.cc0820.top:3000"
                : "",
                pathRewrite:{"/api":""},
            },
            "^/api1":{
                target:"http://127.0.0.1:3001",
                pathRewrite:{"/api1":""},
            },
            
        },
        client:{
            overlay:false
        }
        
    },
    
    plugins:[
      new WebpackBar(),
        new MiniCssExtractPlugin({
            filename:"main.[contenthash:8].css"
        }),
        new HtmlWebpackPlugin({
            template:"./public/index.html",
           cdn:{
            script:["https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.js",
            "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.js"
        ],
            style:[]
           },
        })
    ]
}

// CDN(内容分发网络Content Deliver Network)

// 内容分发网络有若干服务器节点构成

// 全球都会部署服务器
