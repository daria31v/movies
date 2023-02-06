import { getCast } from '../../service/apiThemovieBb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG } from '../../service/constant';

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
    <div>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={BASE_IMG + actor.profile_path} alt="actor" width="80px" />
          <h3>{actor.original_name}</h3>
          <h4>Character: {actor.character}</h4>
        </li>
      ))}
    </div>
  );
};

export default Cast;
