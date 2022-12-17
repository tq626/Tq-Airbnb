import styled from 'styled-components'

export const RoomsWrapper = styled.div`
   position: relative;
   padding: 8px 20px;
   margin-top: 148px;

   
  .title{
    margin-top: 20px;
   }
  .list {
    margin: 0 -8px;
    display: flex;
    flex-wrap: wrap;
  }
  
  > .cover{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, .8);
  }
 
`