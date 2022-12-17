import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { LongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView2 from '@/base-ui/scroll-view2'

const HomeLongfor = memo((props) => {
  const { infoData } = props 
  return (
    <LongforWrapper>
        <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
          <div className="longfor-list">
            <ScrollView2>
              {
                  infoData.list.map((item, index) => {
                    return <LongforItem itemData={item} key={index}></LongforItem>
                  })
                }
            </ScrollView2>
              
              
          </div>
        
        
    </LongforWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor