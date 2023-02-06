import styled from "styled-components";

export const Container = styled.div`
  display: block;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border-bottom: 1px solid tomato;
  border-right: 1px solid tomato;
  /* border-radius: 4px;  */
  display: flex;
  justify-items: center;
  align-items: center;
  color: tomato;
  > a {
    text-decoration: none;
  }
`;

export const MoviesTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
