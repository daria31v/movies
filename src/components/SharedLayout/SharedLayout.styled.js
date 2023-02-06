import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineLocalMovies } from 'react-icons/md';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid tomato;
  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  font-weight: 700;
  margin: 0;
  display: flex;
  justify-items: center;
  align-items: center;
  color: tomato;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
    /* background-color: orangered; */
  }
`;

export const Icon = styled(MdOutlineLocalMovies)`
width: 30px;
height: 20px;

`