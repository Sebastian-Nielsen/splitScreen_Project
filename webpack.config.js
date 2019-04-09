const path = require('path');
module.exports = {
	entry: {
		jsx_compiled: ['./components/index.jsx']
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.s[c|a]ss$/,
				loader: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ['style-loader', 'css-loader'] // equivalent to: "style-loader!css-loader"
			}
		],
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/build'
	},
};
