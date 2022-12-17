import styled from "styled-components";

export const TabsWrapper = styled.div`
  
  margin-top: 15px;
  .item {
    flex-shrink: 0;
    flex-basis: 120px; //相当于最小的宽度
    margin-right: 16px;
    padding: 14px 16px;
    box-sizing: border-box;
    border: 0.5px solid #aaa;
    border-radius: 4px;
    line-height: 20px;
    white-space: nowrap;  //文本不进行换行
    text-align: center; //文本水平居中
    cursor: pointer;
    /* ${props => props.theme.mixin} */
    box-shadow:  0px 3px 2px rgba(0, 0, 0, .18);
    &.active{
      color: #fff;
      background-color: ${props => props.theme.color.secondary};
    }
  }
`