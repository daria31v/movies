import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from '../../service/apiThemovieBb';
import { BASE_IMG, IMG, NOT_FOUND } from 'service/constant';
import {
  Links,
  Container,
  Text,
  Title,
  Lable,
  LableBox,
} from '../MoviesDetails/MoviesDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';

const MoviesDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then(resp => {
      setMovieData(resp);
    });
  }, [id]);

  if (!movieData) {
    return (
      <div>
        <h1>Something went wrong...</h1>
        <img src={NOT_FOUND} alt="bad search" />
      </div>
    );
  }
  const genresMovie = movieData.genres;
  const allGenrse = genresMovie.map(genresMovie => genresMovie.name + ' ');

  return (
    <>
      <BackLink to={backLinkHref}>GO BACK</BackLink>

      <img src={BASE_IMG + movieData.poster_path} alt="" width="150px" />
      {movieData.poster_path === null && <img src={IMG} alt="" width="150px" />}

      <Title>{movieData.original_title}</Title>
      <Text>User Score: {Math.round(movieData.popularity)} points</Text>

      <Lable>Overview</Lable>
      <Text>{movieData.overview}</Text>
      {movieData.overview === '' && (
        <p>We don`t have any overview for this movie.</p>
      )}

      <Lable>Genres</Lable>
      <Text>{allGenrse}</Text>

      <Container>
        <LableBox>
          <h4>Additional information</h4>
        </LableBox>
        <Links to="cast" state={{ from: location.state.from }}>
          Cast
        </Links>
        <Links to="reviews" state={{ from: location.state.from }}>
          Reviews
        </Links>
        <Outlet />
      </Container>
    </>
  );
};

export default MoviesDetails;
