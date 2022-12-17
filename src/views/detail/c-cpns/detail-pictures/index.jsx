import React, {memo, useCallback} from 'react'
import { useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import PictureBrowser from '@/base-ui/picture-browser'
import { PicturesWrapper } from './style'

const DetailPictures = memo(() => {

  // 定义是否显示的状态
  const [showBrowser, setIsShowBrowser] = useState(false)

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  // function closeBrowserHandle() {
  //   setIsShowBrowser(false)
  // }
  const closeBrowserHandle = useCallback(() => {
    setIsShowBrowser(false)
    console.log("======")
  },[showBrowser])

  return (
    <PicturesWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setIsShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setIsShowBrowser(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={e => setIsShowBrowser(true)}>查看照片</div>
      { showBrowser && 
        (<PictureBrowser 
          pictureUrls={detailInfo.picture_urls}
          closeClick={e => closeBrowserHandle()}
          >
        </PictureBrowser>
       )}

    </PicturesWrapper>
  )
})

export default DetailPictures