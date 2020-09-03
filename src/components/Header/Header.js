import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const header = () => {
  return (
    <header>
      <h1><Link to="/"><span className={styles.Logo}>Conference</span>Works</Link></h1>
      <nav>
        <Link className={styles.NavItem} to="/schedule">Schedule</Link>
        <Link className={styles.NavItem} to="/speakers">Speakers</Link>
      </nav>
    </header>
  );
};

export default header;