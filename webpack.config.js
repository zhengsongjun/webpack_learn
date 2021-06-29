const path = require('path')

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
		}]
	}
}