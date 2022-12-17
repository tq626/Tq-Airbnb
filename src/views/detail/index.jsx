import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeHeaderConfigAction } from '../../store/modules/main'

import DetailPictures from './c-cpns/detail-pictures'

const Detail = memo(() => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: false}))
  }, [dispatch])

  return(
    <div>
      <DetailPictures ></DetailPictures>
    </div>
  )
})

export default Detail