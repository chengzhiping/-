import React,{Component} from "react";
import {Link} from "react-router-dom";

class TabsCom extends React.Component{
	render(){
		return(
			
			<nav className="tabs">
				{
					this.props.navTitle.map((item,index)=>{
						let iconstr = item.icon;
						return (
							<li key={index} className="">
								<Link to="/" className="link">
									<i className="iconfont" style={{color:item.color}}>{iconstr}</i>
									<span className="font">{item.title}</span>
								</Link>
							</li>
						)
					})
					
				}
			</nav>
		)
	}
}

export default TabsCom;