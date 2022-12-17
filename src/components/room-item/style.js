import styled from 'styled-components'

export const RoomWrapper = styled.div`
  flex-shrink: 0;
  padding: 8px;
  width: ${props => props.itemWidth};
  box-sizing: border-box;
  margin-top: 10px;

  .inner {
    width: 100%;

    .swiper {
      position: relative;

      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        display: none;
        position: absolute;
        /* display: flex; */
        color: #fff;
        z-index: 3;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        justify-content: space-between;


        .btn.left {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20%;
          /* 左边渐变 */
          background: linear-gradient(to left, transparent 0%, rgba(0,0,0,.3) 100%);
        }

        .btn.right{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20%;
          background: linear-gradient(to right, transparent 0%, rgba(0,0,0,.3) 100%);
        }
      }

      .indicator {
        position: absolute;
        left: 0;
        right: 0;
        z-index: 9;
        bottom: 10px;
        width: 30%;
        margin: 0 auto;

        .dot-list {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 14.28%;

          .dot{
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            margin: 0 3px;
            &.active {
              width: 8px;
              height: 8px;
              border-radius: 50%;
            }
          }
        }
      }

    }

    .cover {
        /*用 padding称起盒子,就算盒子里面没有元素  */
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0; // 66.66%(上)是相对于自身的宽度
        border-radius: 3px;
        overflow: hidden;

      img {
        /* 让图片以自身宽高的百分之百填充上面用padding撑起来的盒子, 这样就解决了因为图片尺寸不一致导致的布局问题 */
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
     }
    

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.verifyColor};


    }

    .name {
      overflow: hidden;//多出的隐藏
      text-overflow: ellipsis;//多出部分用...代替
      display: -webkit-box;//定义为盒子模型显示
      -webkit-line-clamp: 2;//用来限制在一个块元素显示的文本的行数
      -webkit-box-orient: vertical;//从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
      font-size: 16px;
    }

    .price {
      margin-top: 8px;
    }

    .rating{
      display: flex;
      align-items: center;

      margin-top: 5px;
      
      .count{
        font-size: 10px;
        margin-left: 3px;
      }

      .MuiRating-decimal {
        margin: 0 -1px;
      }
    }
  }
`