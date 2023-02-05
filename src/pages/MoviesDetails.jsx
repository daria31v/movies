import { useParams } from "react-router-dom";
import { getTrendingMoviesById } from "../Service/searchMovies";

export const MoviesDetails = () => {
  const { id } = useParams();
  const movie = getTrendingMoviesById(id);
  return (
    <main>
      <img src={movie.poster_path} alt="poster movie" />
      <div>
        <h2> Movie - {movie.title} - {id} </h2>
        <h3>{movie.title}</h3>
        <p></p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
};
