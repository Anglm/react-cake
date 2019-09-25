import React, { Component } from 'react'
import "./footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            <ul>
                <li id="appDownloadLink"><a href="/appdown.html">下载APP</a></li>
                <li><a href="tel:400 650 2121">联系我们</a></li>
                <li><a href="/article-company.html">全站公告</a></li>
                <li><a href="/magazine/detail/189.html">生产经营资质</a></li>
            </ul>
            <p>Copyright© 21Cake蛋糕官网商城 2007-2019, 版权所有 </p>
            <p><a style={{color:"#9a9a9a"}} href="http://www.miitbeian.gov.cn/">京ICP备14006254号-1</a></p>
            <p>网站注册公司名称:北京廿一客食品有限公司</p>
          </div>
        )
    }
}
