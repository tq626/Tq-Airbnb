import React, { memo, useState, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'

import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'
import { HeaderWrapper } from './style'
import { SearchAreaWrapper } from './style'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'

const AppHeader = memo(() => {
  // 定义组件内部的状态
  let [isSearch, setIsSearch] = useState(false)


  // 从redux中获取数据
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const { isFixed, topAlpha } = headerConfig

  // 监听滚动
  const { scrollY } = useScrollPosition()
  console.log(scrollY, "scrollY")

  const prevY = useRef(0)
  // 当不是搜索状态时, 实时将y轴滚动的值赋值给preY
  if (!isSearch) prevY.current = scrollY
  // 当是搜索状态时且从当前位置滚动距离超过30时就关闭搜索状态

  useEffect(() => {
    if (isSearch && Math.abs( scrollY - prevY.current ) > 30 ) setIsSearch(false)
    
  }, [scrollY])
  
 
  // 透明度的逻辑
  const isAlpha = topAlpha && scrollY === 0


  return (
    
    // 给ThemeProvider以下所有组件都传属性isAlpha
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed: isFixed})} >
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter isSearch={ isAlpha || isSearch } searchBarClick={e => setIsSearch(true)}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchAreaWrapper isSearch={isSearch}/>
        </div>
         { isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
      
    
  )
})

export default AppHeader