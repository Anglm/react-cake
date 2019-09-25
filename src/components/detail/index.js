import React, { Component } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import "./detail.css"
import { Carousel } from 'antd'
import actionCreator from './actionCreator'
import {connect} from 'react-redux'

class Detail extends Component {
    componentDidMount(){
        this.props.detailData()
    }
    setBuy=(type)=>{
        let cart = localStorage.getItem('cart')
        //if相当于第二次存 里面之前有数据 所以直接是数组
        if (cart) {
            //是个字符串
            //console.log(cart)
            //解析成对象
            cart = JSON.parse(cart)
            //判断当前数据是否加过购物车 isExist是已存在 i是some参数
            const isExist = cart.some(i => {
                //如果当前加入的id等于cart中的item.id
                return i.id === type.id
                
            })
            //如果已存在就是ture
            if(isExist){
                cart = cart.map(i =>{
                    //找到这条id相同的数据 num++
                    if(i.id === type.id) 
                        i.num++
                    return i
                })
            }else{
                //然后存入当前的对象中
                cart.push({...type, num:1})
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            localStorage.setItem('cart', JSON.stringify([{...type,num:1}]))
        }
        
    }
    render() {
        //console.log(this.props.detail)
        return (
            <div className="Detail">
                <Header />
                <div className="detail-content">
                    {
                        this.props.detail.list && this.props.detail.list.data.list.map((item)=>{
                            return <div key={item}>{this.props.detail.list && this.props.detail.list.data[item]}
                                {/* 轮播图 */}
                                <Carousel autoplay className="detail-carousel">
                                    <div>
                                        <img src={item.url} className="img1" alt=""/>
                                    </div>
                                    <div>
                                        <img src={item.url2} className="img1" alt=""/>
                                    </div>
                                    <div>
                                        <img src={item.url3} className="img1" alt=""/>
                                    </div>
                                </Carousel>
                                {/* 价格及名字 */}
                                    <div className="pro-title">
                                        <h3>{item.name}</h3>
                                        <span>{item.cname}</span>
                                    </div>
                                    <p className="price-label">
                                        <span className="top-price">￥{item.price}</span>
                                    </p>
                                    <div className="buy-button">
                                        <button className="buy1" onClick={this.setBuy.bind(this,item)}>加入购物车</button>
                                        <button className="buy2">立即购买</button>
                                    </div>
                            </div>
                        })
                    }
                    <div className="pro-details-label">
                            <a href="/gallery/tag/17.html">情侣&nbsp;›</a>
                            <a href="/gallery/tag/31.html">人气&nbsp;›</a>
                            <a href="/gallery/tag/44.html">生日&nbsp;›</a>
                            <a href="/gallery/tag/45.html">结婚&nbsp;›</a>
                            <a href="/gallery/tag/46.html">相识&nbsp;›</a>
                    </div>
                    {/* 产品类型选择 */}
                     <div className="select-card">
                        <ul className="select-specifications">
                            <li>
                                <a href="script:;">已选择：681g(1.5磅)
                                <i></i>
                                </a>
                            </li>
                        </ul>
                        <div className="details-options-card">
                            <ul className="details-options">
                                <li className="details-options-size">
                                    <i></i>15.5x15.5
                                </li>
                                <li className="details-options-laid">
                                    <i></i>含5套餐具（蜡烛需单独订购）
                                </li>
                                <li className="details-options-unmber">
                                    <i></i>适合4-5人分享
                                </li>
                                <li className="details-options-time">
                                    <i></i>最早明天 10:00配送
                                </li>
                            </ul>
                        </div>
                        <ul className="store-info">
                            <li>
                                <img src="//static.21cake.com/themes/wap/img/fresh.png" alt="保鲜条件" />>                        
                                <span>保鲜条件</span>
                                <div>
                                    <p>0-4℃保藏10小时，5℃食用为佳</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                     {/* 详情图片 */}
                     <div className="details-img">
                        <img src="https://static.21cake.com/public/images/30/14/e0/cc7aabf6ba1d7ed7d52efaaba36651ba.jpg?1556100512#h" alt="" />
                        <img src="https://static.21cake.com/public/images/25/ad/e7/e2cefe40ae0b5f8a33d236877470e838.jpg?1556100527#h" alt="" />
                        <img src="https://static.21cake.com/public/images/49/77/9f/77c75f5562639188277cf9fd8a689721.jpg?1556100537#w" alt=""/>
                        <img src="https://static.21cake.com/public/images/73/12/e1/c1f30f6c6ebe79b602a8b093c07db469.jpg?1556100549#w" alt=""/>
                        <img src="https://static.21cake.com/public/images/ee/a6/f1/f6e704185d0b91b8a87b9c4779b546f8.jpg?1556100568#h" alt=""/>
                        <img src="https://static.21cake.com/public/images/80/08/0b/5bf712739de41af50c678a76be81d449.jpg?1556100593#h" alt=""/>
                        <img src="https://static.21cake.com/public/images/d1/1b/c9/e466f5ea73293a3b7d3a034091947600.jpg?1556100614#w" alt=""/><br/>
                        <img src="https://static.21cake.com/public/images/7e/20/8b/ea32b8a2ec0c7dbbb8fab0eaf13cf997.png?1559694153#w" alt=""/>
                        <img src="https://static.21cake.com/public/images/bc/87/65/9c9419b23e21d757cab730c8c307d0d1.jpg?1556100623#w" alt=""/>
                        <img src="https://static.21cake.com/public/images/cc/28/be/10a6194200ae88e187ed7f36baf3033e.jpg?1556100636#h" alt=""/><br/>
                        退改说明：<br/>1.&nbsp;北京、上海、杭州、广州地区距配送时间6小时及以上的订单可修改、取消、退订；距配送时间不足5小时，订单不再支持修改、取消、退订。（22点之后不接受次日14点之前配送订单修改、退订）<br/>
                        2.&nbsp;苏州、无锡、深圳、天津距配送时间不足8小时，订单不再支持修改、取消、退订。（22点之后不接受次日16点之前配送订单修改、退订）            
                    </div>
                
                </div>
                <Footer />
            </div>
        )
    }
}
export default connect((state)=>state,actionCreator) (Detail)
