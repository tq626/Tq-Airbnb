import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.color.primary};
  
  .logo{
    margin-left: 25px;
    cursor: pointer;
  }

`