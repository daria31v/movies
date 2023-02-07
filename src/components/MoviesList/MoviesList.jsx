import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, CardWrapper, MoviesTitle } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import { MdOutlineLocalMovies } from 'react-icons/md';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => {
        return (
          <CardWrapper key={movie.id}>
            <MdOutlineLocalMovies />
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviesTitle>{movie.title || movie.name}</MoviesTitle>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};

MoviesList.protoType = {
  movies: PropTypes.array.isRequired,
}.isRequired;
