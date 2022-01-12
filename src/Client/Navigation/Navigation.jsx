import { NavLink } from "react-router-dom";
import { routes } from "../../Shared/services/routes";

import styles from "../Navigation/Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink exact to={routes.HOME_PAGE} className={styles.NavLink}>
      Home
    </NavLink>
    <NavLink exact to={routes.MOVIES_PAGE} className={styles.NavLink}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;