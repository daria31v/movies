import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: inline-block;
`;

export const Links = styled(Link)`
  display: block;
  margin-bottom: 10px;
  text-decoration: none;
  color: tomato;
  font-weight: 500;
  
  :hover {
    text-transform: uppercase;
    text-decoration: dashed;
  }
`;

export const Text = styled.p`
margin: 0;
margin-bottom: 10px;
background-color: white;
opacity: 0.95;
`;

export const Title = styled.h3`
margin-top: 10px;
border-bottom: 2px solid tomato;
margin-bottom: 10px;
`;

export const Lable = styled.h4`
margin-top: 10px;
border-bottom: 2px solid tomato;
margin-bottom: 10px; 
`;

export const LableBox = styled.div`
width: 960px;
border-bottom: 2px solid tomato;
margin-bottom: 10px;
`;