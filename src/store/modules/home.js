import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from '../../services'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch, getState }) => {
   getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
   })
  
   getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreDataAction(res))
   })

   getHomeDiscountData().then(res => {
    dispatch(changeDiscountDataAction(res))
   })

   getHomeHotRecommendData().then(res => {
    dispatch(changeRecommendAction(res))
   })

   getHomeLongforData().then(res => {
    dispatch(changeLongforAction(res))
   })

   getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
   })
})


const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    hightScore: {},
    discount: {},
    recommend: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers:{
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreDataAction(state, {payload}) {
      state.hightScore = payload
    },
    changeDiscountDataAction(state, {payload}) {
      state.discount = payload
    },
    changeRecommendAction(state, {payload}) {
      state.recommend = payload
    },
    changeLongforAction(state, {payload}) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  },
  // extraReducers:{
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload
  //   }
  // }
})

export const { 
     changeGoodPriceInfoAction, 
     changeHighScoreDataAction,
     changeDiscountDataAction,
     changeRecommendAction,
     changeLongforAction,
     changePlusInfoAction
    } = homeSlice.actions

export default homeSlice.reducer