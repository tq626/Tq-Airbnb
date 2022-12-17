import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '../../store/modules/entire/actionCreators'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { EntireWrapper } from './style'
import { changeHeaderConfigAction } from '../../store/modules/main'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({isFixed: true}))
  }, [dispatch])
  return(
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire