import Navigation from "../Navigation/Navigation";

import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
};

export default Header;