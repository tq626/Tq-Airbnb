import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: 0 2px 4px rgba(0,0,0, 0.05);
    width: 300px;
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 24px;
    box-sizing: border-box;
    padding: 0 6px 0 20px;
    
    .left{
      font-size: 14px;
      font-weight: 600;
      color: ${props => props.theme.textColor.primaryColor};
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      color: #fff;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primary};
    }

    ${props => props.theme.mixin.boxShadow}
  }

  .search-detail {
    position: relative;
    height: 50px;

    .infos {
      position: absolute;
      left: 50%;
      top: 60px;
      transform: translateX(-50%);
    }

  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
  }

  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`