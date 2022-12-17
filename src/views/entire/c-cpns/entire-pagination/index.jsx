import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';

import { PaginationWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  // 从redux中获取数据
  const { totalCount, currentPage, roomList  } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }))
  
  const totalPage = Math.ceil(totalCount / 20) // 此处需要向上取整  
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  function handleChange(event, value) {
    
    
    dispatch(fetchRoomListAction(value))
  }

  return (
    <PaginationWrapper>
      {
        // roomList有值后才渲染对应的组件
        !!roomList.length && (
          <div className="info">
            <Pagination count={totalPage} size="small" onChange={handleChange}/>
            <div className="desc">
              {/* currentPage: 0 1 - 20 
                  currentPage: 1 21 - 40 */}
              第{ startCount }-{ endCount }个房源, 共超过{ totalCount }个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination