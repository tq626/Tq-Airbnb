import styled from 'styled-components'

export const ScrollViewWrapper = styled.div`
  position: relative;
  
  .moveBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 9;
    background-color: #fff;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  .moveBtn.right{
    right: -12px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .moveBtn.left {
    left: -12px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .scroll {
    overflow: hidden;
    .scroll-content {
      position: relative; //用于获取offset相对于父元素定位的宽度
      display: flex;
      padding: 0 0 3px 0;
      /* 动画是加在要添加动画的元素上才会有效果 */
      transition: transform 250ms ease;
    }
  }


`