import React, { Component } from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"
import "./list.css"
import {connect} from 'react-redux'
import { Tabs } from 'antd'
import actionCreator from './actionCreator'

const { TabPane } = Tabs//antd方法中的

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            type:1
        }
    }
    componentDidMount(){
        this.props.listData()
    }
    callback=(type)=>{
        this.props.history.push('/list/'+type)
        if(this.props.list.list && this.props.list.list.data.list){
        this.setState({
            list:this.props.list.list.data.list,
            type:type
        })
        }
      }
    getDetail=()=>{
        this.props.history.push('/detail/'+this.state.type)
    }
    render() {
        //console.log(this.props)
        return (
            <div className="list">
                <Header/>
                <div className="list-content">
                {/* bind.(this)是当前选项卡的项数 */}
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}> 
                    <TabPane tab="蛋糕" key="1">
                        <ul>
                            {   
                                this.props.list.list && this.props.list.list.data.list.map((item)=>{
                                    return <li key={item.id} className="list-goods" onClick={this.getDetail.bind(this)}>
                                                <img src={item.url} className="img1" alt=""/>
                                                <h3>
                                                    {item.name}
                                                    <span>{item.cname}</span>
                                                </h3>
                                                <span className="span-price">￥{item.price}/200g</span>
                                                <img src="/img/lst2.png" className="img2" alt=""/>
                                        </li>
                                })
                            }
                            
                        </ul>
                    </TabPane>
                    <TabPane tab="冰淇淋" key="2">
                        <ul>
                            {
                                this.props.list.list && this.props.list.list.data.list2.map((item)=>{
                                    return <li key={item.id} className="list-goods" onChange={this.callback.bind(this)}>
                                                <img src={item.url} className="img1" alt=""/>
                                                <h3>
                                                    {item.name}
                                                    <span>{item.cname}</span>
                                                </h3>
                                                <span className="span-price">￥{item.price}/200g</span>
                                                <img src="/img/lst2.png" className="img2" alt=""/>
                                        </li>
                                })
                            }
                            
                        </ul>
                    </TabPane>
                    <TabPane tab="咖啡下午茶" key="3">
                        <ul>
                            {
                                this.props.list.list && this.props.list.list.data.list.map((item)=>{
                                    return <li key={item.id} className="list-goods" onClick={this.getDetail.bind(this,item.id)}>
                                                <img src={item.url} className="img1" alt=""/>
                                                <h3>
                                                    {item.name}
                                                    <span>{item.cname}</span>
                                                </h3>
                                                <span className="span-price">￥{item.price}/200g</span>
                                                <img src="/img/lst2.png" className="img2" alt=""/>
                                        </li>
                                })
                            }
                        </ul>
                    </TabPane>
                </Tabs>
                </div>
                <Footer />
            </div>
        )
    }
}

export default connect((state)=>state,actionCreator) (List)