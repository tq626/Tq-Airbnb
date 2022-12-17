import React from "react"
import { Navigate } from 'react-router-dom' 

const Home = React.lazy(() => import("@/views/home"))
const Entire = React.lazy(() => import("@/views/entire"))
const Detail = React.lazy(() => import("@/views/detail"))
const Demo = React.lazy(() => import("@/views/demo"))

const routes = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/entire",
    element: <Entire></Entire>
  },
  {
    path: "/detail",
    element: <Detail></Detail>
  },
  {
    path:"/demo",
    element: <Demo></Demo>
  }
]

export default routes