import { Link } from 'react-router-dom';
import { Container, CardWrapper, MoviesTitle } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => {
        return (
          <CardWrapper key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviesTitle>{movie.title || movie.name}</MoviesTitle>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
