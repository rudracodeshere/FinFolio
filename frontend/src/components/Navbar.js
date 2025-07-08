import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './Navbar.module.css'; // Import the new styles

const Navbar = () => {
  const { isAuthenticated, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate('/login');
  };

  const authLinks = (
    <ul className={styles.navLinks}>
      <li><Link className={styles.navLink} to="/dashboard">Dashboard</Link></li>
      <li><Link className={styles.navLink} to="/portfolio">Portfolio</Link></li>
      <li><button onClick={onLogout} className={`${styles.button} ${styles.primaryButton}`}>Logout</button></li>
    </ul>
  );

  const guestLinks = (
    <ul className={styles.navLinks}>
      <li><Link to="/login" className={`${styles.button} ${styles.secondaryButton}`}>Log In</Link></li>
      <li><Link to="/register" className={`${styles.button} ${styles.primaryButton}`}>Register</Link></li>
    </ul>
  );

  return (
    <nav className={styles.navbar}>
      <Link to={isAuthenticated ? "/dashboard" : "/login"} className={styles.logo}>FinFolio</Link>
      <nav>
        {isAuthenticated ? authLinks : guestLinks}
      </nav>
    </nav>
  );
};

export default Navbar;
