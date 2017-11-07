import styled from 'styled-components';

const Button = styled.button`
  background-color: #ffffff;
  padding: 7px 20px;
  cursor: pointer;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  
  &:hover {
    background-color: #d3d3d3;
  }
`;

export const BtnPrimary = Button.extend`
  background-color: cornflowerblue;
  
  &:hover {
    background-color: deepskyblue;
  }
`;

export const BtnError = Button.extend`
  background-color: #eb9999;
  
  &:hover {
    background-color: #dc4c4c;
  }
`;
