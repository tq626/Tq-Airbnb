import styled from 'styled-components'

export const SearchSectionsWrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 20px;
  width: 850px;
  height: 66px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 35px;

  ${props => props.theme.mixin}

  >.item {
    display: flex;
    align-items: center;
    
    border-radius: 35px;
    
    width: ${props => props.currentIndex === 0 ? "33.3%" : "50%"};
    height: 100%;

    &:hover {
      background-color: rgba(0,0,0,.15);

    }
    .info{
      padding: 0px 10px 0px 30px;
      .title {
        font-weight: 600;
      }

      .desc {
        margin-top: 4px;
      }
    }
    /* .divider {
      width: 1px;
      height: 100%;
      background-color: #fff;
    } */
  }

  .search-icon {
    position: absolute;
    right: 7px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: ${props => props.theme.color.primary};
    color: #fff;
    border-radius: 50%;
  }
`