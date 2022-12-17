import styled from 'styled-components'

export const SearchTabsWrapper = styled.div`
  display: flex;
  color: #222;
  justify-content: center;

  
  .item {
    position: relative;
    width: 64px;
    height: 20px;
    margin: 10px 16px;
    font-size: 16px;
    cursor: pointer;
   

    &:hover{
      .text {
        color: #aaa;
      }
      
      .bottom {
        position: absolute;
        top: 28px;
        left: 0;
        width: 64px;
        height: 2px;
        background-color: #aaa;
      }
    }

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      background-color: ${props => props.theme.isAlpha ? "#fff" : "#333"};
      transition: width 200ms ease;
    }

    &.active .text {
      color: ${props => props.theme.isAlpha ? "#fff" : "#333"};
    }
    .text {
      height: 20px;
      width: 40px;
      line-height: 20px;
      color: ${props => props.theme.isAlpha ? "#fff" : "#333"};
    }
    .bottom {
      width: 0;
      transition: width 200ms ease-in-out;
    }
  }
`