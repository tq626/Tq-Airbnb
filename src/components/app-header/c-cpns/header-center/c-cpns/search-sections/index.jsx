import React, { memo } from 'react'


import { SearchSectionsWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'
const SearchSections = memo((props) => {
  const { searchInfos = [], currentIndex } = props 
  return (
    <SearchSectionsWrapper currentIndex={currentIndex}>
      {
        searchInfos.map((item, index) => {
          return (
            <div className='item'>
              <div className="info">
                <div className="title">
                    {item.title}
                </div>
                <div className="desc">
                    {item.desc}
                </div>
              </div>
              <div className="divider"></div>
            </div>
          )
        })
      }
      <div className="search-icon">
        <IconSearch></IconSearch>
      </div>
    </SearchSectionsWrapper>
  )
})

export default SearchSections