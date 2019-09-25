import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import "./header.css"

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            visible:false
        }
        this.isBlock =  this.isBlock.bind(this)
    }
    isBlock(){
        this.setState({
            visible:!this.state.visible
        })
    }
    render() {
        return (
            <div className="header">
                <div className="Hleft" onClick={this.isBlock}><i className="icon-title"></i></div>
                <div className="Hcenter">北京</div>
                <div className="icon-book"><NavLink to="/home" activeClassName="booka"><img src="/img/h1.png" alt=""/></NavLink></div>
                <div className="Hright">
                <NavLink to="/center" className="Ha2"><i className="Iright1"></i></NavLink>
                <NavLink to="/buycar" className="Ha2"><i className="Iright2"></i></NavLink>
                </div>
                <ul className="top-header-menu" style={{display:this.state.visible?"block":"none"}}>
                    <li><NavLink to="/home"><img src="/img/ul1.png" alt=""/><span>首页</span></NavLink></li>
                    <li><NavLink to="/list"><img src="/img/ul2.png" alt=""/><span>分类</span></NavLink></li>
                    <li><NavLink to="/login"><img src="/img/ul3.png" alt=""/><span>个人</span></NavLink></li>
                </ul>
            </div>
        )
    }
}
