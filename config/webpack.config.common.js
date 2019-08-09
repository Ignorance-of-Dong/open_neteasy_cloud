/*
 * @Author: Mr.zheng
 * @Date: 2019-08-09 13:46:11
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-08-09 14:26:05
 * @Description: 
 */
/**
 * webpack公共配置【对文件的处理以及解析】
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ComponentLibrary} = require('../web.config.ts')
module.exports = {
	entry: {
		build: path.resolve(process.cwd(), "src/index.tsx")
	},
	output: {
		// 输出目录
		path: path.resolve(__dirname, "../dist")
	},
	resolve: {
		extensions: [".js", ".jsx", ".css", ".scss", ".tsx", ".ts"],
		alias: {
			"src": path.resolve(process.cwd(), "src"),
		}
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				// 使用 'style-loader','css-loader'
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer'),
							]
						}
					},
					'sass-loader',
				]
			},
			{
				test: /\.(le)ss$/,
				// 使用 'style-loader','css-loader'
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: [
								require('autoprefixer'),
							]
						}
					},
					'less-loader'
				]
			},
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/preset-react",
							"@babel/preset-env",
							"@babel/preset-typescript",
						],
						plugins: [
							[
								"@babel/plugin-proposal-decorators",{"legacy": true}
							],
							[
								"@babel/plugin-proposal-class-properties",
							],
							["@babel/plugin-transform-classes",{"loose": true}],
							["@babel/plugin-transform-runtime"],
							[
								"import", {
									"libraryName": ComponentLibrary,
									"libraryDirectory": 'es',
	     						"style": 'css',
								}
							]
						]
					}
				},
				exclude: path.resolve(process.cwd(), "node_modules")
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)/,
				use: {
					loader: 'url-loader',
					options: {
						outputPath: 'images/', // 图片输出的路径
						limit: 10 * 1024
					}
				}
			},
			{
				test: /\.(eot|woff2?|ttf|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name]-[hash:5].min.[ext]',
							limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
							publicPath: 'fonts/',
							outputPath: 'fonts/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ // 生成html文件
			filename: 'index.html', // 最终创建的文件名
			minify: {
				caseSensitive:false,
				collapseWhitespace:true,
				removeAttributeQuotes:true,
				removeComments:true
			},
			template: path.resolve(process.cwd(), "public/index.html"), // 指定模板路径
		}),
		new webpack.HotModuleReplacementPlugin(), // 对文件实现热更新
	],
}