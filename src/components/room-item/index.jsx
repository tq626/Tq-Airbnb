import PropTypes from 'prop-types'
import React, { memo, useRef, useState} from 'react'
import Rating from '@mui/material/Rating'
import { Carousel } from 'antd'

import { RoomWrapper } from './style'
import IconLeftBtn from '@/assets/svg/icon_leftBtn'
import IconRightBtn from '@/assets/svg/icon_rightBtn'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {

  const { itemData, itemWidth = "25%", itemClick} = props
  const [selectIndex, setSelectIndex] = useState(0)
  // 绑定元素
  const sliderRef = useRef()

  // 事件处理的逻辑
  function controlClickHandle(isRight = true, event) {
    // 点击切换左右箭头切换图片
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    let itemDataLength = itemData?.picture_urls?.length
    console.log(itemDataLength, "item")
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemDataLength - 1
    if (newIndex > itemDataLength - 1) newIndex = 0
    setSelectIndex(newIndex)

    // 阻止冒泡
    event.stopPropagation()
  }

  // 跳转详情的逻辑
  function itemClickHandle() {
    if(itemClick) itemClick(itemData)
  }

  // 子元素的赋值
  const pictureElement = (
    <div className="cover">
            <img src={ itemData.picture_url } alt="" />
     </div>
  )
  
  const swiperElement = (
    <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false, e)}>
              <IconLeftBtn width={25} height={25}></IconLeftBtn>
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true, e)}>
              <IconRightBtn width={25} height={25}></IconRightBtn>
            </div>
          </div>

          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                itemData?.picture_urls?.map((item, index) => {
                  return (
                    <div className="dot-list" key={item}>
                      <span className={classNames("dot" , {active: selectIndex === index})}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          {/* 轮播图 */}
          <Carousel dots={false} ref={sliderRef}>
            {
              itemData?.picture_urls?.map((item) => {
                return (
                  <div className="cover" key={item}>
                    <img src={item}  alt="" />
                  </div>
                )
              })
            }
          </Carousel>
      </div>
  )


  return (
    // 给RoomWrapper这个样式组件传递属性
    <RoomWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"} itemWidth={itemWidth} onClick={e => itemClickHandle()}>
      <div className="inner">
        { !itemData.picture_urls ? pictureElement : swiperElement }

        <div className="desc">
           { itemData.verify_info.messages.join(" · ") }
        </div>
         <div className="name">
          {itemData.name}
         </div>
         <div className="price">
          ￥{itemData.price}/晚
         </div>
          <div className="rating">
            <Rating
               value={ itemData?.star_rating ?? 4}
               precision={0.1}
               sx={{color: "#008489", fontSize: "14px"}}
            />
            <span className='count'>{itemData?.reviews_count}</span>
            { itemData?.bottom_info?.content && <span className="commment" style={{fontSize: itemData?.bottom_info?.font_size + 'px', color: itemData?.bottom_info?.content_color}}>·{itemData?.bottom_info?.content }</span>}
          </div>

      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem