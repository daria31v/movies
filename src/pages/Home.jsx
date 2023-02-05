
// export default Home;
import { TrendingTodaytList } from "../components/TrendingTodayList";
import { getTrendingMovies } from "../Service/apiThemoviedb";
import { useState, useEffect } from "react";
export const Home = () => {
  const [movies, setMovies] = useState([]);

   useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const dataFetch = await getTrendingMovies();
        // console.log(dataFetch)
        setMovies(dataFetch.results);

      } catch  {
        alert('💥SOMETHING WENT WRONG! TRY LATER.');
      } 
    };
    fetchTrendingMovies();
   }, []);
  
  
  return (
    <main>
      <h1>Trending today</h1>
      <TrendingTodaytList movies={movies} />
    </main>
  );
};
