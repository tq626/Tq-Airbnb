import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {

  // 从redux中获取roomList数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  // 事件处理
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const itemClickHandle = useCallback((itemData) => {
    console.log(itemData)
    dispatch(changeDetailInfoAction(itemData))
    navigate("/detail")
  },[navigate, dispatch])


  return (
    <RoomsWrapper>
      <h2 className='title'>{ totalCount }多处住宿</h2>

      {
        !!roomList.length && (
          <div className="list">
            {
              roomList.map((item, index) => {
                return (
                  <RoomItem itemData={item} itemWidth="20%" key={item.id + index} itemClick={itemClickHandle}/>
                )
              })
            }
         </div>
        )
      }

      

     {
      isLoading && (
         <div className="cover"></div>
      )
     }
    </RoomsWrapper>
  )
})

export default EntireRooms