
// export default Home;

// import { TrandeTodayList } from "../components/TrandeTodayList";
// import { getTrandeToday } from "../fakeAPI";

// export const Home = () => {
  // const trandeToday = getTrandeToday();
  
  // const visibleMovies = movies.filter((movie) =>
  //   movie.name.toLowerCase().includes(movie.toLowerCase())
  // );

    // return (
    //   <main>
    //   <h1>Trending today</h1>  
      // {/* <TrandeTodayList products={visibleMovies} /> */}
    // {/* </main>
//   );
// }; */}


import { TrendingTodaytList } from "../components/TrendingTodayList";
import { getTrendingMovies } from "../Service/apiThemoviedb";
// import { useEffect } from "react";
export const Home = () => {
  //  useEffect(() => {
  //   const handleFetchMovies = async (query, page) => {
  //     try {
  //       const data = await getTrendingMovies();
  //       const resultMovies = data.result;
       
  //       // if (!resultImages.length) {
  //       //   alert('According to the result of the request, there are no photos!');
  //       //   return;
  //       // }
  //       // setImages(prevImages =>
  //       //   page === 1 ? [...resultImages] : [...prevImages, ...resultImages]
  //       // );
  //       // setTotalImage(data.totalHits);
  //     } catch (error) {
  //       alert('💥SOMETHING WENT WRONG! TRY LATER.');
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   };
  //   // if (!query) {
  //   //   return;
  //   // }
  //   handleFetchMovies();
  //  }, []);
  
  const data = getTrendingMovies();
  console.log(data)

  
  return (
    <main>
      <TrendingTodaytList movies={data} />
    </main>
  );
};
