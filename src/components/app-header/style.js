import styled from "styled-components"

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  border-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};

  &.fixed {
    position: fixed;
    z-index: 19;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 15;
    background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,0)" : "rgba(255,255,255,1)"};

    .top {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */
      height: 80px;
    }

    
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
  }

`

export const SearchAreaWrapper = styled.div`
  height: ${props => props.isSearch ? "100px" : "0px" };
  transition: height 250ms ease;
`