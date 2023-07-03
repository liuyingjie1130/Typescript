const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports={
	entry:'./src/index.ts',
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'boundle.js',
		//告诉webpack不使用箭头函数
		environment:{
			arrowFunction:false
		}
	},
	module:{
		rules:[
			{
				test:/\.ts$/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:[
								[
									"@babel/preset-env",
									{
										targets:{//兼容浏览器版本
											"chrome":"88",
											"ie":"11"
										},
										"corejs":"3",//corejs版本
										"useBuiltIns":"usage"//corejs方式 按需加载
									}
								]
							]
						}

				},
					'ts-loader'],
				exclude:/node_modules/
			}
		]
	},
	// mode:'development',
	plugins:[
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' }),


	],
	resolve:{// 设置引用模块 ，如果不设置 引用ts文件时构建会报错
		extensions:[".ts",".js"]
	}

}
