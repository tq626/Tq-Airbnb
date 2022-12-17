import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  /* 定位元素为了获取左偏移 */
  .i-content {
    display: flex;
    position: relative;
    transition: transform 200ms ease;

    > * {
    flex-shrink: 0;
   }

  }
`