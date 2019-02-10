import path from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export default {
	entry: './src/js/index.js',
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(png|jpg|gif|ico|ttf|woff2?|svg|eot)$/,
				use: [
					{
						loader: 'file-loader?name=[name].[ext]'
					}
				]
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
			{from: 'src/assets/posts', to: 'posts'}
		], {})
	]
};
