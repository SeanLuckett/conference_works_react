import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const header = () => {
  return (
    <header>
      <h1><a href="#"><span className={styles.Logo}>Conference</span>Works</a></h1>
      <nav>
        <Link className={styles.NavItem} to="/schedule">Schedule</Link>
        <a className={styles.NavItem} href="#">Speakers</a>
      </nav>
    </header>
  );
};

export default header;