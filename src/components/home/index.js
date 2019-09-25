import React, { Component } from 'react'
import "./home.css"
import Header from "../header/header"
import Footer from "../footer/footer"
import {NavLink} from "react-router-dom"//路由可以只引入navlink
import { Carousel } from 'antd'//轮播图
import actionCreator from './actionCreator'
import {connect} from 'react-redux'

class Home extends Component {
    componentDidMount(){
        this.props.homeData()
    }
    render() {
        //console.log(this.props.home.list && this.props.home.list.data.body.list)
        return (
            <div className="Home">
                <Header />
                    <div className="section">
                    <Carousel autoplay>
                        <div>
                        <h3><img src="/img/l1.jpg" alt=""/></h3>
                        </div>
                        <div>
                        <h3><img src="/img/l2.jpg" alt=""/></h3>
                        </div>
                        <div>
                        <h3><img src="/img/l3.jpg" alt=""/></h3>
                        </div>
                        <div>
                        <h3><img src="/img/l4.jpg" alt=""/></h3>
                        </div>
                    </Carousel>
                        <div className="home-content">
                            <ul className="rights-box">
                                <li><i className="new-home-icon"></i>新客满198元赠冰淇淋</li>
                                <li><i className="new-home-icon"></i>满100包邮 </li>
                                <li><i className="new-home-icon"></i>全程冷链配送</li>
                            </ul>
                            <ul className="home-menu-box">
                                <li><NavLink to="/list/1"><img src="/img/h8.png" alt=""/>蛋糕</NavLink></li>
                                <li><NavLink to="/list/2"><img src="/img/h9.png" alt=""/>面包</NavLink></li>
                                <li><NavLink to="/list/3"><img src="/img/h10.png" alt=""/>下午茶</NavLink></li>
                                <li><NavLink to="/list/center"><img src="/img/h11.png" alt=""/>企业专区</NavLink></li>
                            </ul>
                            <div className="mould-goods">
                                <div className="mould-goods-content">
                                <h3 className="title-goods">
                                        <span>新品</span>
                                        <NavLink to="/list">更多<i className="new-home-more"></i></NavLink>
                                </h3>
                                {
                                    this.props.home.list && this.props.home.list.data.body.list.map((item)=>{
                                        return <div key={item.id}>
                                    <ul>
                                        <li>
                                            <NavLink to="/detail"><img src={item.url} alt=""/></NavLink>
                                            <div className="bottom-price-cart">
                                                <a href=" /goods-1095.html">
                                                    <h4>
                                                        <span className="title">{item.name}</span> 
                                                        <span className="price">{item.price}元</span>
                                                        <span>元/{item.g}g(1.0磅)</span>
                                                    </h4>    
                                                    <p>{item.jieshi}</p>
                                                </a>
                                                <button name="add-to-cart_18798" data-productid="18798">
                                                    <i className="new-home-icon"></i>
                                                </button>    
                                            </div>
                                        </li>
                                    </ul></div>
                                    })
                                }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
export default connect((state)=>state,actionCreator) (Home)
