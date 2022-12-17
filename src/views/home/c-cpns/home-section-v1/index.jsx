import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HomeWrapperV1 } from './style'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import SectionFooter from '../../../../components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props

  const handleInfoData = infoData?.list?.slice(0, 8)
  return (
    <HomeWrapperV1>
        <div className="good-price">
          <SectionHeader title={ infoData.title } subtitle={infoData.subtitle}/>
          <SectionRoom listInfo={handleInfoData} itemWidth="25%"></SectionRoom>
          <SectionFooter></SectionFooter>
        </div>
    </HomeWrapperV1>
  )
})

HomeSectionV1.prototype = {
  infoData: PropTypes.object
}

export default HomeSectionV1