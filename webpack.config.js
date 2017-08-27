const path  = require('path');
const webpack = require('webpack');
require("babel-polyfill");
const svgDirs = [require.resolve('antd-mobile').replace(/warn\.js$/,''),//属于antd-mobile 内置 svg文件
path.resolve(__dirname,'./public/svgs'),
];


module.exports={
    devtool:'eval-source-map',//生成suorce map

    entry:['webpack-hot-middleware/client','babel-polyfill', path.resolve(__dirname, './app/index.js')],

    output:{//输出目录
        path:__dirname + '/public/js',//打包后的js文件存放目录
        filename: 'bundle.js', //打包后的文件名
        publicPath: 'http://127.0.0.1:3000/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              }
        })
    ],
    module:{
        loaders:[{
            test:/\.jsx?$/,
            exclude:/node_modules/,//屏蔽文件


            loader:'babel-loader',
            query:{
                presets:['es2015','react']
            }},

            {test:/\.css$/,
                exclude:/node_modules/,//屏蔽文件
                loader:'style-loader!css-loader'
            },{
            test:/\.less$/,
            exclude:/node_modules/,//屏蔽文件
            loader:'style-loader!css-loader!less-loader'
            },{
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=25000'
            },
            {
                test:/\.(svg)$/i,
                loader:'svg-sprite-loader',
                include:svgDirs,
            }

        ],

    },

    resolve:{
        extensions:['.web.js','.js','.json'],
        modules:['node_modules',path.join(__dirname, './node_modules')]
    }

}





