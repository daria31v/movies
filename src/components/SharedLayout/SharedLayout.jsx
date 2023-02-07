import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link, Icon } from './SharedLayout.styled';
// import { MdOutlineLocalMovies } from 'react-icons/md';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            HOME
          </Link>
          <Link to="/movies">MOVIES</Link>
        </nav>
        <Logo>
          <Icon />
          <Link to="/" end>
            {' '}
            MOVIES
          </Link>
        </Logo>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
