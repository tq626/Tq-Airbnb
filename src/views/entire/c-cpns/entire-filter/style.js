import styled from 'styled-components'

export const FilterWrapper = styled.div`
  display: flex;
  z-index: 10;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  border-bottom: 0.5px solid rgb(220, 224, 224);
  background-color: #fff;
  
  .filter{
    display: flex;
    padding: 12px 20px;
    .item{
      border: 0.5px solid rgb(220, 224, 224);
      padding: 8px 13px;
      border-radius: 4px;
      margin-right: 13px;
      font-size: 14px;
      color: rgba(72,72,72);
      cursor: pointer;
      &:hover{
        background-color: rgb(220, 224, 224, .3);
      }

      &.active{
        background-color: ${props => props.theme.color.secondary};
        color: #fff;
      }
    }
  }
`