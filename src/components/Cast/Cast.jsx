import { getCast } from '../../Service/apiThemovieBb';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG } from '../../Service/constant';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <h1>Cast</h1>
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
