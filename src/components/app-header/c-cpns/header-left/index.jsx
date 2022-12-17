import React, { memo } from "react";
import { useNavigate } from 'react-router-dom'

import IconLogo from "@/assets/svg/icon_logo";
import { LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  
  const navigate = useNavigate()
  function logoClickHandle() {
    console.log("跳转")
    navigate("/home")
  }

  return (
    <LeftWrapper>
      <div className="logo" onClick={e => logoClickHandle()}>
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft