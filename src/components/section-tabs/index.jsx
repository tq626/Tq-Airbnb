import  classNames  from 'classnames'
import PropTypes from 'prop-types'
import React, { memo,  useState } from 'react'

import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabsTitles = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleItem(item, index) {
    setCurrentIndex(index)
    tabClick(item, index)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {tabsTitles.map((item, index) => {
          return (
            <div
              key={item}
              className={classNames("item", {active: index === currentIndex })}
              onClick={e => handleItem(item, index)}
              >{item}
            </div>
          )
        })}
      </ScrollView>
      
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabsTitles: PropTypes.array
}

export default SectionTabs