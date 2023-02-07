import { getCast } from '../../Service/apiThemovieBb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG } from '../../Service/constant';
import { Container, Profile, ProfilePhoto } from './Cast.styled';
import PropTypes from 'prop-types';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id).then(setCast);
  }, [id]);

  if (cast.length === 0) {
    return (
      <div>
        <p>We don`t have any cast for this movie.</p>
      </div>
    );
  }

  return (
    <Container>
      {cast.map(actor => (
        <Profile key={actor.id}>
          <ProfilePhoto
            src={BASE_IMG + actor.profile_path}
            alt="actor"
            width="80px"
          />
          <h3>{actor.name}</h3>
          <h4>Character: {actor.character}</h4>
        </Profile>
      ))}
    </Container>
  );
};

export default Cast;

Cast.protoType = {
  id: PropTypes.number.isRequired,
  cast: PropTypes.array.isRequired,
  getCast: PropTypes.func.isRequired,
}.isRequired;
