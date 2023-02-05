import { Link } from "react-router-dom";
import { Container, CardWrapper, MoviesTitle } from "./TrendingTodayList.styled";

export const TrendingTodaytList = ( {movies} ) => {
    console.log(movies)
  return (
    <Container>
          {movies.map((movie) => {
              return (
                  <CardWrapper key={movie.id}>
                      <Link to={`${movie.id}`}>
                          <MoviesTitle>{movie.name}</MoviesTitle>
                      </Link>
                  </CardWrapper>)
          })}
    </Container>)
};
