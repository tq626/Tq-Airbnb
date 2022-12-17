import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props
  const contentRef = useRef()

  useEffect(() => {
    console.log(selectIndex)

    //1. 获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex]
    console.log(selectItemEl)
    // 左偏移宽度
    const itemLeft = selectItemEl.offsetLeft
    // content里面每个子元素的可见宽度
    const itemWidth = selectItemEl.clientWidth

    // 2.content的宽度
    const contentWidth = contentRef.current.clientWidth
    // contentRef元素子元素所有的宽度
    const contentScroll = contentRef.current.scrollWidth

    // 3.获取selectIndex要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5

    if (distance < 0) distance = 0  //判断左边的情况(不让最左边的跟着移动)
    
    // 右边灵界位置的判断 当distance的长度比元素总长度(包括滚动长度)(contentScroll)-容器可视宽度(contentWidth) 还大的时候就意味着右边临界点的位置要移动了 此时把两者插值赋值给distance, 这样右边的临界点就是最靠右且不会动了
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance

    // 5.改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`

    // 获取selectIndex要滚动的距离
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator