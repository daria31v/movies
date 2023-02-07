import { SearchBox } from '../../components/SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../../service/apiThemovieBb';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    getSearchMovie(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    setSearchParams({ query });
  };

  return (
    <>
      <SearchBox
        value={query}
        onChange={handleChange}
        onSubmit={handleSubmitForm}
      />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
