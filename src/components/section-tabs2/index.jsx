import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { SectionTabs2Wrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs2 = memo((props) => {
  const { tabsName = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function tabClickHandle(item, index) {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <SectionTabs2Wrapper>
      <ScrollView>
          {
            tabsName.map((item, index) => {
              return (
                <div
                  key={item}
                  className={classNames("item", {active: index === currentIndex })}
                  onClick={e => tabClickHandle(item, index)}
                  >{item}
                </div>
              )
            })
          }
      </ScrollView>
    </SectionTabs2Wrapper>
  )
})

SectionTabs2.propTypes = {
  tabsName: PropTypes.array
}
export default SectionTabs2