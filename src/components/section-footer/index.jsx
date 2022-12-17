import React, { memo, } from 'react'
import { useNavigate } from 'react-router-dom'
import  PropTypes  from 'prop-types'

import IconMore from '@/assets/svg/icon_more'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props

  let message = `查看更多内容`
  if(name) {
    message = `查看更多${name}房源`
  } 

  // 事件处理
  // 路由跳转
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }


  return (
    <FooterWrapper color={name ? "#008489" : "#000"} >
       <div className="more" onClick={e => moreClickHandle()}>
         <span className='content'>{ message }</span>
         <IconMore></IconMore>
       </div>
    </FooterWrapper>
  )
})

SectionFooter.prototype = {
  name: PropTypes.string
}
export default SectionFooter