import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'

import IconClose from '../../assets/svg/icon_close'
import { BrowserWrapper } from './style'
import IconLeftBtn from '@/assets/svg/icon_leftBtn.jsx'
import IconRightBtn from '@/assets/svg/icon_rightBtn.jsx'
import { useState } from 'react'
import IconTriangleArrowBottom from '@/assets/svg/icon_triangle-arrow-bottom'
import Indicator from '@/base-ui/indicator'
import IconTriangleArrowTop from '../../assets/svg/icon_triangle-arrow-top'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [isShowList, setIsShowList] = useState(true)

  // 当图片浏览器展示出来时, 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  })

  // 点击右上角的x按钮关闭这个图片浏览器
  function closeBtn() {
    if (closeClick) closeClick()
  }

  function btnClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = pictureUrls.length - 1
    if (newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }

  function bottomItemClickHandle(index) {
    setCurrentIndex(index)
    
    setIsNext(index > currentIndex)
  }
  return (
    <BrowserWrapper isNext={isNext} isShowList={isShowList}>
      <div className="top">
        <div className="close-btn" onClick={closeBtn}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => btnClickHandle(false)}>
            <IconLeftBtn width="77" height="77" ></IconLeftBtn>
          </div>
          <div className="btn right" onClick={e => btnClickHandle(true)}>
            <IconRightBtn width="77" height="77" ></IconRightBtn>
          </div>
        </div>
        <div className="container">
          {/* 给想要的元素加上动画就用该组件进行包裹 */}
          <SwitchTransition mode="in-out">
            <CSSTransition
             key={pictureUrls[currentIndex]} //必须传且值要是唯一的
             classNames="pic"
             timeout={200}
            >
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
          
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex}/{pictureUrls.length - 1}</span>
              <span>room apartment图片</span>
            </div>
            <div className="toggle" onClick={e => setIsShowList(!isShowList)}>
              <span>{isShowList ? "隐藏" : "显示"}照片列表</span>
              {
                isShowList ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>
              }
              
            </div>
          </div>
          <div className="list">
          <Indicator selectIndex={currentIndex}>
            {
              pictureUrls.map((item, index )=> {
                return (
                  <div className={classNames("item", {active: currentIndex === index})} key={item}
                    onClick={e => bottomItemClickHandle(index)}
                   >
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Indicator>
        </div>
        </div>
      </div>
    </BrowserWrapper>
  )

})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
  closeBrowser: PropTypes.func
}

export default PictureBrowser