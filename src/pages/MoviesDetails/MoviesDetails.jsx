import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from '../../Service/apiThemovieBb';
import { BASE_IMG, IMG } from 'Service/constant';

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
      {/* <li>{[movieData.genres[{}]]}</li> */}
      <div>
        <h4>Additional information</h4>
        <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state.from }}>
          Reviews
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default MoviesDetails;
