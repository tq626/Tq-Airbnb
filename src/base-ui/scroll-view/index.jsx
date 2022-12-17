import  React, {memo, useEffect, useState, useRef} from 'react'
import IconLeftBtn from '../../assets/svg/icon_leftBtn'
import IconRightBtn from '../../assets/svg/icon_rightBtn'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 用一个状态记录按钮的显示和隐藏
  const [ showLeftBtn, setShowLeftBtn ] = useState(false)
  const [ showRightBtn, setShowRightBtn ] = useState(false)
  // const [ posIndex, setPosIndex ] = useState(0)
  const posIndexRef = useRef(0)
  // 记录totalDistance的值, 用useRef, 此处用useState和用useRef的区别,useState保存状态的值在重新赋值的时候会重新渲染整个组件, 而用useRef保存的值在修改状态的时候不会重新渲染整个组件
  const totalDistanceRef = useRef()

  // 组件渲染完毕, 判断是否显示右侧的按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth //可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    // console.log(scrollWidth, "scrollWidth")
    // console.log(clientWidth, "clientWidth")
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    
    if (totalDistance > 0) {
      setShowRightBtn(true)
    }
  }, [props.children])

  // 事件处理的逻辑
  function leftClickHandle() {
    const newIndex = posIndexRef.current - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    posIndexRef.current = newIndex
    setShowRightBtn(totalDistanceRef.current - newElOffsetLeft > 0)
    setShowLeftBtn(newElOffsetLeft > 0)
  }

  function rightClickHandle() {
    const newIndex = posIndexRef.current + 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newElOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newElOffsetLeft}px)`
    posIndexRef.current = newIndex
    setShowRightBtn(totalDistanceRef.current - newElOffsetLeft > 0)
    setShowLeftBtn(newElOffsetLeft > 0)
  }

   return (
    <ScrollViewWrapper>
      { showLeftBtn && (
        <div className='moveBtn left' onClick={ leftClickHandle }>
          <IconLeftBtn/>
        </div>
      )}
      { showRightBtn && (
        <div className='moveBtn right' onClick={ rightClickHandle }>
          <IconRightBtn/>
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
      
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {

}

export default ScrollView