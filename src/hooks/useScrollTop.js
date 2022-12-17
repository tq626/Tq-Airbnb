import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)  // scrollTo() 滚动到(0,0)的位置  scroll(xxx)滚动的距离是 xxx
  }, [location.pathname]) //监听路径发生改变的时候调用
}