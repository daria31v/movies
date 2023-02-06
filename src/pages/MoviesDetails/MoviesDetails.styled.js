import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: inline-block;
`

export const Links = styled(Link)`
  /* padding: 8px 16px; */
  /* border-radius: 4px; */
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

export const Genres = styled.p`
margin-right: 8px;
`