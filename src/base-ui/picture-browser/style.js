import styled from 'styled-components'

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;

  background-color: #333;

  .top{
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      right: 15px;
      top: 15px;
    }
  }

  .slider{
    position: relative;
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    /* background-color: #fff; */

    //开启绝对定位就是为了跑到两边
    .control{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        cursor: pointer;
      }
    }


    // 为了是让图片在中间的位置展示
    .container{
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;

      /* 虽然安装了动画组件,且该组件也同样包裹了img但是可以同级编写样式 */
      img{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画样式的编写 */
      .pic-enter{
        /* 每次移动的距离都是自己每张图片的宽度, 所以是百分之百 */
        transform: translateX(${props => props.isNext ? '100%' : '-100%'});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease-in;
      }

      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview{
    display: flex;
    justify-content: center;
    margin-top: 10px;
    height: 100px;

    .info{
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list{
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => props.isShowList ? '67px' : '0px'};

        .item{
          margin-right: 15px;
          cursor: pointer;

          img{
            height: 67px;
            opacity: 0.5;
          }

          &.active{
            img{
              opacity: 1;
            }
            ;
          }
        }
      }
    }
    /* background-color: orange; */
  }
`

