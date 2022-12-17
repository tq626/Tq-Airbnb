import React, { memo,  useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '../../store/modules/home'
import HomeBanner from './c-cpns/home-banner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { isEmptyo }  from '@/utils'
import HomeLongfor from './c-cpns/long-for'
import HomeSectionV3 from './c-cpns/home-section-v3'
import { changeHeaderConfigAction } from '../../store/modules/main'

const Home = memo(() => {
  // 从redux中获取数据
  const { goodPriceInfo, hightScore, discount, recommend, longforInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    hightScore: state.home.hightScore,
    discount: state.home.discount,
    recommend: state.home.recommend,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  // 派发异步的事件: 发送网络请求
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true}))
  }, [dispatch])

  return(
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
         { isEmptyo(discount) && <HomeSectionV2 infoData={discount}/>}
         { isEmptyo(recommend) && <HomeSectionV2 infoData={recommend}/>}

         { isEmptyo(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
         { isEmptyo(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
         { isEmptyo(hightScore) && <HomeSectionV1 infoData={hightScore}/>}
         { isEmptyo(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default Home