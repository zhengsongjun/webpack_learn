const path = require('path')
const autoprefixer = require('autoprefixer');

module.exports = {
	mode:'production',
	// mode:'development',
	entry : './src/index.js',  //入口文件
	output:{
		filename:'index.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[{
			test:/\.jpe?g$/,
			use:{
				loader:'url-loader',
				options:{
					name:'[name]_[hash].[ext]',
					outputPath:'images/',
					limit:2 * 1024
				}
			}
		}, {
			test: /\.css$/,
			// 从右像左
			// /css-lodaer 解析css 
			//style-loader 将css代码塞到header标签里面/
			// scss-loader 将scss语法变成css语法 sass-loader node-sass
			use: ["style-loader", "css-loader","postcss-loader"],
		},{
			test: /\.scss$/,
			// 从右像左
			// /css-lodaer 解析css 
			//style-loader 将css代码塞到header标签里面/
			// scss-loader 将scss语法变成css语法 sass-loader node-sass
			// postcss-loader 给scss文件添加前缀
			use: ["style-loader", "css-loader","sass-loader","postcss-loader"],
		      }
		]
	}
}