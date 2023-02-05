// export default Home;
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { getTrendingMovies } from '../../Service/apiThemovieBb';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const dataFetch = await getTrendingMovies();
        // console.log(dataFetch)
        setMovies(dataFetch.results);
      } catch {
        alert('💥SOMETHING WENT WRONG! TRY LATER.');
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </main>
  );
};
