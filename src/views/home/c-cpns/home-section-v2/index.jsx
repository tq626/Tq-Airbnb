import React, { memo, useState, useCallback } from "react";
import PropTypes from 'prop-types'
import { SectionV2Wrapper } from "./style";
import SectionRoom from "@/components/section-room";
// import SectionTabs from "@/components/section-tabs";
import SectionTabs2 from "@/components/section-tabs2";
import SectionHeader from "@/components/section-header"
import SectionFooter from "@/components/section-footer";
const HomeSectionV2 = memo((props) => {
  // 取父组件中传递过来的值
  const { infoData } = props
  // 定义组件内部的值
  
  // useState定义的初始值, 如果后面修改这个初始值, 修改的这个初始值也不会有作用除非用setxxx改变这个值,就比如下面这个,当前者为空时所以初始值为"", 就算后面前者有数据了也不会起作用
  // const initialName = Object.keys(infoData.dest_list ?? {})[0] ?? ""
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name, setName] = useState(initialName)
  
  const tabsTitles = infoData?.dest_address?.map(item => item.name )
  // 此处是给组件传递函数, 所以用useCallback函数包裹优化(场景: 一般用于子传父的场景)
  // const handleTabChange = useCallback((name, index) => {
  //   setName(name)
  // }, [])
  const handleTabChange2 = useCallback((name, index) => {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      {/* <SectionTabs tabsTitles={tabsTitles} tabClick={handleTabChange}></SectionTabs> */}
      <SectionTabs2 tabsName={tabsTitles} tabClick={handleTabChange2}></SectionTabs2>
      <SectionRoom listInfo={infoData.dest_list?.[name]} itemWidth="33.333%"></SectionRoom>
      <SectionFooter name= {name}></SectionFooter>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.prototype = {
  infoData: PropTypes.object
}

export default HomeSectionV2