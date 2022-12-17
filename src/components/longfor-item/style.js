import styled from 'styled-components'

export const LongforItemWrapper = styled.div`

  flex-shrink: 0;
  width: 20%;

  .inner{
    
    padding: 8px;
    .cover{
      position: relative;
      border-radius: 6px;
      overflow: hidden;
      .cover-img{
        width: 100%;
      }

      .bg-cover{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 60%;
        background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgba(0,0,0) 100%);
      }

      .info{
        position: absolute;
        color: #fff;
        bottom: 30px;
        width: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;

        .city{
          text-align: center;
          margin-bottom: 5px;
        }

        .price{
          font-size: 14px;
          text-align: center;
        }
      }
    }
  }
`