import {
  useParams,
  Link,
  Outlet,
  useLocation,
  // useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from '../../Service/apiThemovieBb';
import { BASE_IMG } from 'Service/constant';
import { BackLink } from 'components/BackLink/BackLink';

export const MoviesDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  // const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDetails(id).then(resp => {
      setMovieData(resp);
    });
  }, [id]);

  if (!movieData) {
    return (
      <div>
        <h1>Not found</h1>
      </div>
    );
  }
  return (
    <>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src={BASE_IMG + movieData.poster_path} alt="" width="150px" />
      <h3>{movieData.original_title}</h3>
      <p>xxxx</p>
      <h4>Overview</h4>
      <p>xxx</p>
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
