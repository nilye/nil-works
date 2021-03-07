const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const resolve = p => path.resolve(__dirname, p)

module.exports = {
	entry: resolve('../src/index.js'),
	output: {
		path: resolve('../dist'),
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
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
	],
}
