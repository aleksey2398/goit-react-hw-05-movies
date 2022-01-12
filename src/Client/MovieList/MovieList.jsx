import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MovieList = ({ list }) => {
  const location = useLocation();
  const movieElements = list.map((item) => (
    <li className={styles.List} key={item.id}>
      <Link
        to={{
          pathname: `/movies/${item.id}`,
          state: {
            from: location,
          },
        }}
        className={styles.Link}
      >
        {item.original_title ? item.original_title : item.original_name}
      </Link>
    </li>
  ));
  return <ul>{movieElements}</ul>;
};

export default MovieList;

MovieList.defaultProps = {
  list: [],
};

MovieList.propTypes = {
  list: PropTypes.array,
};