const	{ CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { merge } = require('webpack-merge')
const baseConfig = require('./base')

module.exports = merge(baseConfig, {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new OptimizeCSSAssetsPlugin()
		]
	}
})
