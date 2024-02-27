import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"; //

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to={"/"}>Admin Page</Link>
      </div>

      <div className={styles.employeesLink}>
        <a href="">Employees</a>
      </div>

      <div className={styles.authLinks}>
        <a href="">Login</a>
        <a href="">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
