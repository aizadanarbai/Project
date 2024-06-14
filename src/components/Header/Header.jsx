import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useContext } from "react";
import { postsContext } from "../../contexts/PostsContext";
const Header = () => {
  const { posts } = useContext(postsContext);
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/20240307100657/1971-gucci-logo-600x319.png"
            
          />
          
          
        </div>
        <nav className={styles.navigation}>
                <ul> 
            <li>
              <Link to="/">
                <img className={styles.home} src="https://upload.wikimedia.org/wikipedia/commons/6/60/Firefox_Home_-_logo.png"/></Link>
            </li>
            <li>
              <Link to="/tshirt">Футболки</Link>
            </li>
            <li>
              <Link to="/pants">Брюки </Link>
            </li>
            <li>
              <Link to="/cross">Кроссовки</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
