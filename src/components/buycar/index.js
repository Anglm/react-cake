import React, { Component } from 'react'
import Header from '../header/header'
import "./buycar.css"

export default class Buycar extends Component {
    constructor(props){
        super(props)
        this.state={
            type:""
        }
    }
    componentDidMount(){
        let cart = localStorage.getItem('cart')
        if(cart) cart = JSON.parse(cart)
        this.setState({
            type:cart
        })
    }
    increase(Tid){
        var num
        //e.target就是所委托的+按钮 找到父级的属性 获得这一组数据的id
        const id = Tid
        //拿出本地储存的cart 并转换
        let cart = JSON.parse(localStorage.getItem('cart'))
        //map可以修改数组中元素 并且有返回值
        cart = cart.map(i => {
                            //如果cart中的id与上面选择的id相等 则数量++
            if (i.id === id) {
                i.num++
                num = i.num
                //price = i.num * i.price
            }
            return i
        })
        localStorage.setItem('cart', JSON.stringify(cart))
        if(this.state.type.id===id){
            console.log(this.state.type.id)
        }
    }
    render() {
        return (
            <div className="buycar">
                <Header />
                <div className="buycar-content">
                    购物车
                    {
                        this.state.type && this.state.type.map((item,index)=>{
                            return <div key={index}>
                                <li className="cart-object-goods-item scene_area" data-indent="18799" data-quantity="2" data-price="298.000" data-mktprice="298.000">
                                    <div className="cart-pro-box">
                                        <a href="script:;">
                                            <img src={item.url} alt=""/>
                                        </a>
                                        <div className="cart-pro-title">
                                            
                                            <div>
                                                <h2>
                                                    <span>{item.name}</span>
                                                    <span>{item.cname}</span>
                                                </h2>
                                            </div>
                                            <span className="cart-select-pound" data-product-id="18799" data-literpound="1">
                                                规格：454g(1.0磅)
                                                <i></i>
                                            </span>
                                            <span className="cart-price" data-amount="596">
                                                ￥{item.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="cart-pro-number">
                                        <a className="action-quantity-minus reduce-num" href="script:;">
                                            <img src="/img/B2.png" alt="-" />
                                        </a>
                                        <span data-indent="18799" className="quantity ">{item.num}</span>
                                        <a className="action-quantity-plus" href="script:;" onClick={this.increase.bind(this,item.id)}>
                                            <img src="/img/B3.png" alt="+" />
                                        </a>
                                    </div>
                                    <p className="laid-count">每份含免费餐具5套</p>
                                    <a className="birthday-brand" data-indent="goods_1095_18799" data-content="" data-spec="1.0磅" data-num="0" href="script:;">
                                        +添加生日牌
                                    </a>
                                </li>
                            </div>
                        })
                    }
                    {/* 结算按钮 */}
                    <div className="place-order-bottom">
                        <a href="script:;" className="order-delete-but" id="action-clear-cart-btn" alt="">
                            <i></i>
                        </a>
                        <a href="cript:;" className="place-order-but"  id="submit-form" alt="">
                            去结算
                        </a>
                        <div className="pay-money" id="cart-total-amount">
                            <div>
                                ¥<span>596.00</span>
                                <span>商品</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
