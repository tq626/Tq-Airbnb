import React, { memo, useEffect, useRef, useState } from 'react'
import IconLeftBtn from '../../assets/svg/icon_leftBtn'
import IconRightBtn from '../../assets/svg/icon_rightBtn'
import { ScrollView2Wrapper } from './style'

const ScrollView2 = memo((props) => {

  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [showRightBtn, setShowRightBtn] = useState(false)
  
  const posIndexRef = useRef(0)
  const scrollContentRef = useRef()
  const totalDistanceRef = useRef(0)
  useEffect(() => {
    // console.log(scrollContentRef.current.scrollWidth)
    // console.log(scrollContentRef.current.clientWidth)
    const scrollWidth = scrollContentRef.current.scrollWidth
    const clientWidth = scrollContentRef.current.clientWidth
    console.log(scrollWidth, "scrollContent")
    console.log(clientWidth, "clientWidth")
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    if (totalDistance > 0) {
      setShowRightBtn(true)
    }
  },[props.children])  

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndexRef.current + 1 : posIndexRef.current - 1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    console.log(newOffsetLeft, "newOffsetLeft")
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    posIndexRef.current = newIndex
    setShowRightBtn(totalDistanceRef.current > newOffsetLeft)
    setShowLeftBtn(newOffsetLeft > 0)
  }

  return(
    <ScrollView2Wrapper>
       {showLeftBtn && (
        <div className='control left' onClick={e => controlClickHandle(false)} >
          <IconLeftBtn></IconLeftBtn>
        </div>
       )}
       {
        showRightBtn && (
          <div className="control right" onClick={e => controlClickHandle(true)}>
            <IconRightBtn></IconRightBtn>
          </div>
        )
       }
       <div className="scroll">
         <div className="scroll-content" ref={scrollContentRef}>
            {props.children}
         </div>
       </div>
    </ScrollView2Wrapper>
  )
})

export default ScrollView2