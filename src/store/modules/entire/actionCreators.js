import { getEntireRoomList } from "@/services/modules/entire"
import * as actionTypes from "./constants"

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_LOADING,
  isLoading
})

export const fetchRoomListAction = (value) => {
  //返回新的函数 
  return async (dispatch, getState) => {
    // 点击分页计数器修改state中currentPage的值
    dispatch(changeCurrentPageAction(value - 1))

    // 根据页码,获取最新的数据
    const currentPage = getState().entire.currentPage
    console.log(currentPage)

    // 发送网络前,将isLoading状态改为true
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(currentPage * 20)  
    // 发送网络后, 将isLoading状态改为false
    dispatch(changeIsLoadingAction(false))

    console.log(res)
    // 2.获取到最新的数据, 保存redux的store中
    const roomList = res.list
    console.log(roomList)
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}