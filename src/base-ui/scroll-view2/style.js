import styled from 'styled-components'

export const ScrollView2Wrapper = styled.div`
  position: relative;  //用于获取相对offsetLeft偏移量

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
  }
  .control.right{
    top: 50%;
    transform: translate(0, -50%);
    right: -14px;
  }
  .control.left {
    top: 50%;
    transform: translate(0, -50%);
    left: -14px;
  }
  
  .scroll{
    overflow: hidden;
    .scroll-content{
      display: flex;
      transition: transform 250ms ease;
      padding-bottom: 3px;
    }
  }
`