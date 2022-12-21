import styles from "./Header.module.css";
import { CiUser } from "react-icons/ci";
import { AiOutlineDashboard } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>
        <Link to="/dashboard" className={styles.link}>
          <h1>PRODUCT ADMIN</h1>
        </Link>
      </div>
      <div className={styles.navContent}>
        <a href="#" className={styles.iconDiv}>
          <AiOutlineDashboard></AiOutlineDashboard>

          <Link to="/dashboard" className={styles.link}>
            Dashboard
          </Link>
        </a>
        <a href="#" className={styles.iconDiv}>
          <HiShoppingCart></HiShoppingCart>

          <Link to="/products" className={styles.link}>
            Products
          </Link>
        </a>
        <a href="#" className={styles.iconDiv}>
          <CiUser></CiUser>

          <Link to="/Accounts" className={styles.link}>
            Accounts
          </Link>
        </a>
      </div>
      {props.login && (
        <div className={styles.logout}>
          <a href="#" className={styles.logout} onClick={props.onLogout}>
            Admin, <b>Logout</b>
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
