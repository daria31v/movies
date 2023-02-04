// import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import {MdOutlineLocalMovies} from 'react-icons/md';


export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>

        <Logo>
          <MdOutlineLocalMovies/>
          <span>{" "} MOVIES</span>
        </Logo>
        
      </Header>
      {/* {/* <Suspense fallback={<div>Loading page...</div>}> */}
        <Outlet />
       {/* </Suspense>  */}
    </Container>
  );
};