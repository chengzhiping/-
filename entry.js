import React from "react";
import ReactDOM from "react-dom";
require("./src/css/style.css");
//require('./src/css/iconfont.css')

import App from "./src/App.js"

//const navListArr= ["外卖","发现","订单","我的"]
const navListArr = 


ReactDOM.render(
	<App NavTitles={navListArr}/>,
	document.getElementById('app')
)

