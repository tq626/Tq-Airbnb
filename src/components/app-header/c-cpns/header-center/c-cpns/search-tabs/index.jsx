import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'

import { SearchTabsWrapper } from './style'


const SearchTabs = memo((props) => {
  const { titles = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index) {
    setCurrentIndex(index)
    if (tabClick) tabClick(index)
  }

  useEffect(() => {
  
  }, [titles])

  return (
    <SearchTabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div 
               className={classNames("item", {active: currentIndex === index})}
               key={item}
               onClick={e => itemClickHandle(index)}
            >
              <span className='text'>{item}</span>
              <span className='bottom'></span>
            </div>
          )
        })
      }
    </SearchTabsWrapper>
  )
})

export default SearchTabs