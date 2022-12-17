import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 1px solid #ccc;

  .footer-container {
    width: 1032px;
    margin: 0 auto;
    padding: 0 0 90px 0;
    .footer-top {
      display: flex;
      .item{
        width: 262px;
        padding: 0 3px;
        .title{
          margin-top: 35px;
          margin-bottom: 20px;
          font-weight: 600;
          color: ${props => props.theme.textColor.primaryColor};
        }

        .container {
          .list{
            color: #767676;
            font-weight: 600;
            font-size: 14px;
            margin-top: 8px;
          }
        }
      }
    }
    .footer-bottom{
      margin-top: 30px;
      border-top: 1px solid #ccc;
      color: ${props => props.theme.textColor.thirdaryColor};
      font-weight: 600;
      font-size: 14px;

      .bottomContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;

        .bottomLeft{
          display: flex;
          align-items: center;
          .info{
            margin-left: 5px;
            .info-top{
              margin-bottom: 4px;
              .police {
                width: 22px;
                height: 22px;
              }
              .license{
                width: 22px;
                height: 22px;
              }
            }
          }
        }

        .bottomRight{
          display: flex;
          align-items: center;
          padding: 0 10px 0 0;
          .weiBoContainer{
            margin-right: 15px;
          }
        }
      }
    }
  }
`