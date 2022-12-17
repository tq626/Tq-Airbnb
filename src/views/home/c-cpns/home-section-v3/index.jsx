import PropTypes from 'prop-types'
import React, {memo} from 'react'

import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView2 from '@/base-ui/scroll-view2'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
   return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="list">
        <ScrollView2>
           {
              infoData.list.map((item, index) => {
                return(
                  <RoomItem itemData={item} itemWidth="20%" key={item.id}></RoomItem>
                )
              })
           }
        </ScrollView2>

      </div>
      <SectionFooter></SectionFooter>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}
export default HomeSectionV3