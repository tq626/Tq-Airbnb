import React, { memo } from 'react'
import { FooterWrapper } from './style'
import footerData from '../../assets/data/footer'
import FooterLogo from '../../assets/svg/icon_footerLogo'
import policeImg from '@/assets/img/home/public_police.png'
import license from '@/assets/img/home/license.png'
import IconWeiBo from '../../assets/svg/icon_weibo'
import IconWeChat from '../../assets/svg/icon_weChat'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="footer-top">
            { footerData.map((item, index) => {
              return (
                <div className="item">
                  <div className="title">
                    {item.name}
                  </div>
                  <div className="container">
                    {  item.list.map((iten) => {
                      return(
                        <div className="list">
                          {iten}
                        </div>
                      ) 
                      })
                    }
                  </div>
                </div>
              )
            })}
        </div>
        <div className="footer-bottom">
          <div className="bottomContainer">
            <div className="bottomLeft">
              <div className="logo">
                <FooterLogo/>
              </div>
              <div className="info">
                <div className="info-top">
                  <span>京ICP备16017121号</span>
                  <span>京ICP证 160773号</span>
                  <img className='police' src= {policeImg} alt="" />
                  <span>京公网安备 11010502032345号</span>
                  <span>安彼迎网络（北京）有限公司</span>
                  <img className='license' src={license} alt="" />
                  <span>营业执照</span>
                </div>
                <div className="info-bottom">
                  <span>© 2022 Airbnb, Inc. All rights reserved.</span>
                  <span>条款</span>
                  <span> · </span>
                  <span>隐私政策</span>
                  <span> · </span>
                  <span>网站地图</span>
                  <span> · </span>
                  <span>全国旅游投诉渠道 12301</span>
                </div>
              </div>
            </div>
            <div className="bottomRight">
              <div className="weiBoContainer">
                  <IconWeiBo></IconWeiBo>
              </div>
              <div className="weChatContainer">
                  <IconWeChat></IconWeChat>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter