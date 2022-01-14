import React from "react";
import { useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getMovieInfo } from "../../Shared/services/movies";
import {
  NavLink,
  useLocation,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
//import Spinner from "../../Client/Spinner/Spinner";
import styles from "./MovieDetailsPage.module.css";
import { routes } from "../../Shared/services/routes";
import {Audio} from "react-loader-spinner";


const CastPage = lazy(() => import("./CastPage"));
const ReviewsPage = lazy(() => import("./ReviewPage"));

const MovieDetailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await getMovieInfo(movieId);
        setMovie(data);
      } catch (error) {
console.log(error);
      }
  
    };
    fetchMovie();
  }, [movieId]);

  const handleBack = () => {
    if (location?.state?.from) {
      const prevLocation = location.state.from;
      history.push(prevLocation);
    } else {
      history.push(routes.HOME_PAGE);
    }
  };

  const imagePath = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {movie && (
        <>
          <button className={styles.Button} type="button" onClick={handleBack}>
            Go back
          </button>
          <div className={styles.Container}>
            <div className={styles.Image}>
              <img
                src={imagePath + movie.poster_path}
                alt="poster"
                width="250"
              />
            </div>
            <section className={styles.Description}>
              <h2 className={styles.Title}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3 className={styles.Overview}>Overview</h3>
              <span>{movie.overview}</span>
              <h3 className={styles.Genres}>Genres</h3>
              <span>{movie.genres.map((genre) => genre.name).join(" ")}</span>
            </section>
          </div>
          <div>
            <h3 className={styles.InfoTitle}>Additional information</h3>
            <nav className={styles.AdditionalInfo}>
              <NavLink
                to={{
                  pathname: `/movies/${movieId}/credits`,
                  state: {
                    from: location.state.from,
                  },
                }}
                className={styles.Link}
              >
                Cast{" "}
              </NavLink>

              <NavLink
                to={{
                  pathname: `/movies/${movieId}/reviews`,
                  state: {
                    from: location.state?.from,
                  },
                }}
                className={styles.Link}
              >
                Reviews{" "}
              </NavLink>
            </nav>
          </div>

          <Suspense fallback={<Audio
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />}>
            <Switch>
              <Route path="/movies/:id/credits">
                <CastPage />
              </Route>

              <Route path="/movies/:id/reviews">
                <ReviewsPage />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;