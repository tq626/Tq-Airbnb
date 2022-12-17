import React, { memo, useEffect, useState } from 'react'
import IconGlobal from '@/assets/svg/icon_global'
import { RightWrapper } from './style'
import IconMenu from '@/assets/svg/icon_menu'
import IconProfile from '@/assets/svg/icon_profile'

const HeaderRight = memo(() => {

  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false)

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false)
    }
    // 不让该点击事件冒泡
    window.addEventListener("click", windowHandleClick, true)

    return () => {
      window.removeEventListener("click", windowHandleClick, true)
    }
  })


  function profileClickHandle() {
    setShowPanel(true)
  }
  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className='btn'>
          <IconGlobal className="btn"></IconGlobal>
        </span>
        
      </div>
      
      <div className="profile" onClick={ profileClickHandle }>
        <IconMenu className="menu"></IconMenu>
        <IconProfile className="avator"></IconProfile>
        { showPanel && (
         <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
             <div className="item">出租房源</div>
             <div className="item">开展体验</div>
             <div className="item">帮助</div>
            </div>
         </div>
        ) }
        
      </div>
    </RightWrapper>
  )
})

export default HeaderRight