import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from '../../service/apiThemovieBb';
import { BASE_IMG, IMG } from 'service/constant';
import { Links, Container } from '../MoviesDetails/MoviesDetails.styled';
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
      </div>
    );
  }
  const genresMovie = movieData.genres;
  const allGenrse = genresMovie.map(genresMovie => genresMovie.name + ' ');
  // console.log(allGenrse);

  return (
    <>
      <BackLink to={backLinkHref}>GO BACK</BackLink>
      <img src={BASE_IMG + movieData.poster_path} alt="" width="150px" />
      {movieData.poster_path === null && <img src={IMG} alt="" width="150px" />}
      <h3>{movieData.original_title}</h3>
      <p>User Score: {Math.round(movieData.popularity)} points</p>
      <h4>Overview</h4>
      <p>{movieData.overview}</p>
      {movieData.overview === '' && (
        <p>We don`t have any overview for this movie.</p>
      )}
      <h4>Genres</h4>
      <li>
        <p>{allGenrse}</p>
      </li>
      <Container>
        <h4>Additional information</h4>
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
