import tqRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return tqRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }   
  })
}