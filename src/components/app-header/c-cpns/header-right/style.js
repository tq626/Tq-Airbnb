import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  color: ${props => props.theme.textColor.primaryColor};
  font-size: 16px;
  font-weight: 600;

  .btns{
    display: flex;
    align-items: center;
    margin-right: 16px;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      /* background-color: orange; */
      height: 18px;
      line-height: 18px;
      padding: 16px 12px;
      margin-right: 15px;
      color: ${props => props.theme.isAlpha ? "#fff" : "#333"};
      cursor: pointer;
      &:hover {
        border-radius: 18px;
        padding: 16px 12px;
        background-color: #aaa;
      }
    }

  }

  .profile{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 24px;
    height: 42px;
    width: 77px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 25px;
    background-color: #fff;

    ${props => props.theme.mixin.boxShadow}

    .panel{
      position: absolute;
      width: 240px;
      right: 0;
      top: 50px;
      border-radius: 6px;
      box-shadow: 0 0 4px  rgba(0,0,0,.2);
      background-color: #fff;
      padding: 7px 0;
      font-weight: 500;
      .top{
        border-bottom: 1px solid #ccc;
        
        .item {
          padding: 5px 13px;
          height: 40px;
          line-height: 40px;

          &:hover{
            background-color: rgba(0,0,0,.05);
          }
        }
        .item.reregister {
          font-weight: 600;
        }
      }

      .bottom{
        
        .item {
          padding: 5px 15px;
          height: 40px;
          line-height: 40px;

          &:hover{
            background-color: rgba(0,0,0,.05);
          }
        }
      }
    }
  }
`

