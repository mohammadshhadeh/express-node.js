const path = require('path');

module.exports = {
	entry: {
		script: './src/assets/js/script.js',
	},
	output: {
		path: path.resolve(__dirname, './dist/js/'),
		filename: '[name].js',
	},
	cache: false,
};
