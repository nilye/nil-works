
const { merge } = require('webpack-merge')
const baseConfig = require('./base')
const path = require('path')
const resolve = p => path.resolve(__dirname, p)

module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		hot: true,
		port: 3000,
		contentBase: resolve('../dist'),
		historyApiFallback: true
	},
	watchOptions: {
		poll: 1000
	},
})
