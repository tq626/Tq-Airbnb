import styled from 'styled-components'

export const SectionTabs2Wrapper = styled.div`
  
  margin-top: 8px;
  .item {
    flex-basis: 120px;
    padding: 14px 16px;
    box-sizing: border-box;
    border: 0.5px solid #aaa;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap; //文本不能换行
    margin-right: 16px;
    box-shadow: 0 3px 2px rgba(0, 0, 0, .16);
    cursor: pointer;
    &.active{
      color: #fff;
      background-color: ${props => props.theme.color.secondary};
    }
  }

`