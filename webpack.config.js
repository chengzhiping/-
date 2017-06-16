module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:"dist/output.js"
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		
		]
	}
}
