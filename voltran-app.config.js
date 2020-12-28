const path = require('path');

module.exports = {
	appConfigFile: {
		entry: path.resolve(__dirname, './src/conf/'),
		output: {
			path: path.resolve(__dirname, './src'),
			name: 'appConfig',
		}
	},
	configFile: path.resolve(__dirname, './voltran-app.config.js'),
	dev: false,
	distFolder: path.resolve(__dirname, './build'),
	publicDistFolder: path.resolve(__dirname, './build/public'),
	inputFolder: path.resolve(__dirname, './src/partials'),
	prefix: 'sf',
	ssr: true,
	styles: [],
	output: {
		client: {
			path: path.resolve(__dirname, './build/public/project/assets'),
			publicPath: path.resolve(__dirname, './src/assets'),
			filename: '[name]-[hash].js',
			chunkFilename: '[name]-[chunkhash].js'
		},
		server: {
			path: path.resolve(__dirname, './build/server'),
			filename: '[name].js'
		},
	},
	routing: {
		components: path.resolve(__dirname, './src/appRoute/components.js'),
		dictionary: path.resolve(__dirname, './src/appRoute/dictionary.js'),
	},
	staticProps: [],
	svgFolder: path.resolve(__dirname, './src/assets/images'),
	webpackConfiguration: {
		client: {},
		common: {},
		server: {},
	},
};
