import React, { memo, useState, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'

import searchTitles from '@/assets/data/search_titles.json'
import { CenterWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'


const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const titles = searchTitles.map((item) => item.title)
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const tabClickHandle = useCallback((index) => {
    setCurrentTabIndex(index)
  }, [])

  // 事件处理
  function searchBarClickHandle() {
    if (searchBarClick) searchBarClick()
  }

  console.log(isSearch, "isSearch")
  return(
    <CenterWrapper>
      {/* {
        !isSearch ? (
        <div className="search-bar" onClick={searchBarClickHandle}>
          <div className="left">
            <span>搜索房源和体验</span>
          </div>
          <div className="right">
            <IconSearch></IconSearch>
          </div>
        </div>) : (
          <div className="search-detail">
            <SearchTabs titles={titles} tabClick={tabClickHandle}></SearchTabs>
            <SearchSections searchInfos={searchTitles[currentTabIndex].searchInfos} currentIndex={currentTabIndex}></SearchSections>
        </div>
        )
      } */}

      <CSSTransition
          in={!isSearch}
          classNames="bar"
          timeout={250}

          //切换后, 对于不显示的就销毁组件
          unmountOnExit={true}
       >
        <div className="search-bar" onClick={searchBarClickHandle}>
            <div className="left">
              <span>搜索房源和体验</span>
            </div>
            <div className="right">
              <IconSearch></IconSearch>
            </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search-detail">
            <SearchTabs titles={titles} tabClick={tabClickHandle}></SearchTabs>
            <div className="infos">
            <SearchSections searchInfos={searchTitles[currentTabIndex].searchInfos} currentIndex={currentTabIndex}></SearchSections>
            </div>
            
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter