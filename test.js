	// 解析个股
	// 处理思路：
	// 1、首先将要解析的名称统一变成数组，把重复的数组去掉，目的是保证每一个数组元素都只能匹配s里面的一种，并一次性匹配和替换完成
	// 2、通过eval('/' + regEx + '/g')动态设置匹配s的正则，保证去重后的数组元素中可以全部匹配和替换掉
	// 3、小玲玲加油
	if(typeof (s) != "undefined") {
		var sArr = Array.from(new Set(s.match(/\$([^>]+?)\$/g))); // 这是es6数组去重的方法，小玲玲要把s.match(/\$([^>]+?)\$/g)这个匹配出来的数组改成es5的去重方法才行
		console.log(sArr);
		for(var i = 0; i < sArr.length; i++){
			var code = sArr[i].match(/\(([^>]+?)\)/g).toString().slice(1, -1) // 匹配并取得股票代码： sh000001
			var name = sArr[i].match(/\$([^>]+?)\(/g).toString().slice(1, -1) // 匹配并取得股票名称： 上证指数
	        var regEx = "\\$" +  name + "\\(" + code + "\\)\\$" // 格式化正则变量 得到regEx = \$上证指数\(sh000002\)\$  这里面为什么这么处理是因为正则中$, (、)这三个符号都有正则意义的，要使用这个符号的话必须先解义 前面加\符号
			console.log(eval('/'+ regEx +'/g'))
			// console.log(sArr[i])
			s = s.replace(eval('/' + regEx + '/g'), "<a href='/stockInfo?id=" + code + "' target='_blank'>" + sArr[i] + "</a>"); // 查找s上面所有与正则匹配的都替换为对应的a标签
			console.log(s)
		}
		return s
	}
