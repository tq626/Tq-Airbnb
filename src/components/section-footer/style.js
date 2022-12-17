import styled from 'styled-components'

export const FooterWrapper = styled.div`
 display: flex;
 margin-top: 10px;
 .more{
   font-size: 17px;
   font-weight: 600;
   /* line-height: 22px; */
   color: ${ props => props.color };
   cursor: pointer;

   &:hover {
    text-decoration: underline;
   }
 }
`