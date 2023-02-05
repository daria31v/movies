// import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MoviesDetails } from '../pages/MoviesDetails/MoviesDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
// import {NotFound} from '../pages/NotFound'
// const Home = lazy(() => import("../pages/Home"));
// const Movies = lazy(() => import("../pages/Movies"));
// const Cast = lazy(() => import("../pages/Cast"));
// const Reviews = lazy(() => import("./Reviews"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
      {/* </Route> */}
    </Routes>
  );
};
