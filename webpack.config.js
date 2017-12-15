const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var Paths = {
	
}

module.exports = function(env,argv){
	
	return {
		devtool: 'eval-source-map',
		entry: "./src/main.js",
		output: {
			path: __dirname + "/dist",
			filename: "bundle.js"
		},
		devServer: {
			historyApiFallback: true,
			port: 8090,
			inline : true,
			open : true,
		},
		module: {
			rules: [{
				test: /\.vue$/,
				loader: 'vue-loader'
			}, {
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10240,
					name: "images/[hash:8].[name].[ext]",
				}
			},]
		},
		resolve: { //搜索路径
			extensions: ['.js', '.vue', '.json', '.css'], //扩展名
			alias: {
				'vue': 'vue/dist/vue.js',
				'@': __dirname + "/src",
				'rem' : __dirname + "/src/assets/js/rem.js",
				'http' : __dirname + "/src/assets/js/http",
			}
		},
		plugins: [
			new HtmlWebpackPlugin({ //它会自动帮你生成一个 html 文件，并且引用相关的 assets 文件(如 css, js)
				template: __dirname + '/index.html',
				minify: {
					removeAttributeQuotes: true,
	//				collapseWhitespace: true,
				},
				hash: true,
			}),
			new webpack.optimize.UglifyJsPlugin(),
		],		
	}

}

