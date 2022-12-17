import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    /*重置ui组件里面的样式  */
    .MuiPaginationItem-page {
      margin: 0 9px;
      &:hover {
        text-decoration: underline;
      }
    }
    .MuiPaginationItem-icon{
      font-size: 25px;
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }
    .desc{
      margin-top: 15px;
      
    }
  }
 

`