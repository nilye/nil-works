const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const resolve = p => path.resolve(__dirname, p)
const outputPath = resolve('../server/dist')

module.exports = {
	entry: resolve('../src/index.js'),
	output: {
		path: outputPath,
		filename: 'index.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		modules: ['node_modules']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			}, {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}, {
				test: /\.ttf$/,
				loader: 'file-loader',
				options: {
					outputPath: 'fonts',
					name: '[name].[ext]'
				}
			}, {
				test: /\.(jpg|png|webp|wmv|mp4)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'assets',
					name: '[path][contenthash].[ext]'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: './src/assets/favicon.ico', to: outputPath },
				{ from: './src/assets/nebula', to: outputPath + '/nebula' }
			]
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
	],
}
