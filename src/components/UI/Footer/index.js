import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../consts';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.NavGrid}>
        <div className={styles.Navitems}>
          <div>
            <NavLink
              className={styles.Navitem}
              style={{ textDecoration: 'none' }}
              to={ROUTES.home}>
              <span className={styles.item}>Work</span>
            </NavLink>
          </div>
          <div>
            <NavLink
              className={styles.Navitem}
              style={{ textDecoration: 'none' }}
              to={ROUTES.about}>
              <span className={styles.item}>About</span>
            </NavLink>
          </div>

          <div>
            <a
              href="mailto:wout.salembier@hotmail.com"
              className={styles.Navitem}
              style={{ textDecoration: 'none' }}
              >
              <span className={styles.item}>Contact me</span>
            </a>
          </div>
        </div>

        <svg 
            className={styles.line}
            width="101"
            height="7"
            viewBox="0 0 101 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3.34401H100.728" stroke="white" strokeWidth="6" />
          </svg>
      </footer>
    </>
  );
};

export default Footer;
