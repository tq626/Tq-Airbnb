import tqRequest from "..";

export function getHomeGoodPriceData() {
  return tqRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return tqRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return tqRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return tqRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return tqRequest.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return tqRequest.get({
    url: "/home/plus"
  })
}