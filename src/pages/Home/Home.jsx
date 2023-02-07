// export default Home;
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getTrendingMovies } from '../../service/apiThemovieBb';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const dataFetch = await getTrendingMovies();
        setMovies(dataFetch.results);
      } catch {
        alert('💥SOMETHING WENT WRONG! TRY LATER.');
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h2>TRENDING TODAY</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
