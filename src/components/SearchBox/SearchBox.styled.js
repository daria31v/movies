import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  border: 2px solid tomato
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
`;
export const Btn = styled.button`
width: 60px;
height: 37px;
display: flex;
justify-items: center;
align-items: center;
margin-left: 10px;
border: 2px solid tomato;
border-radius: 4px;
color: tomato;
background-color: white;
`