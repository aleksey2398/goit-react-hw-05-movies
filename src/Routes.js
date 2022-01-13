import { Suspense, lazy } from "react";
import {Audio} from "react-loader-spinner";
import { Switch, Route } from "react-router-dom";
//import Spinner from "./Client/Spinner/Spinner";
import { routes } from "./Shared/services/routes";



const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage/NotFoundPage"));

const Routes = () => {
  return (
    <Suspense fallback={<Audio
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />}>
      <Switch>
        <Route path={routes.HOME_PAGE} exact>
          <HomePage title="Home Page" />
        </Route>
        <Route path={routes.MOVIES_PAGE} exact>
          <MoviesPage title="Movies Page" />
        </Route>
        <Route path={routes.MOVIE_DETAILS_PAGE}>
          <MovieDetailsPage title="Movie Details Page" />
        </Route>
        <Route>
          <NotFoundPage title="Not Found Page" />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;