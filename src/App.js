import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import TakeOutCom from "./components/TakeOut/TakeOutContent.js";
import FindCom from "./components/Find/FindContent.js";
import OrderCom from "./components/Order/OrderContent.js";
import MyCom from "./components/My/MyContent.js";


export default class App extends Component{
	constructor(){
		super();
		this.state = {
			activeIndex :0,
			navListArr:[
				{title:"外卖",icon:"\ue600",color:"#0fc2ea",path:"/",content:TakeOutCom},
				{title:"发现",icon:"\ue608",color:"#0fc2ea",path:"/find",content:FindCom},
				{title:"订单",icon:"\ue62f",color:"#0fc2ea",path:"/order",content:OrderCom},
				{title:"我的",icon:"\ue649",color:"#0fc2ea",path:"/my",content:MyCom}
			]
			
		}
	}
	render(){
		return(
			<Router>
				<div>
					<header className="header"></header>
					<Route exact path="/" component={TakeOutCom}/>
					{
						this.state.navListArr.map((pageItem,index)=>{
							return <Route key={index} path={pageItem.path} component={pageItem.content}/>
						})
					}
					
					
					
					<nav className="tabs">
						{
							this.state.navListArr.map((item,index)=>{
								let iconstr = item.icon;
								return (
									<NavLink to={item.path} key={index}>
										<i className="iconfont">{iconstr}</i>
										<span className="font">{item.title}</span>
									</NavLink>
								)
							})
							
						}
					</nav>
				</div>
			</Router>
			
		)
		
	}
}







