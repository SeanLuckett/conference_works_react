import React from 'react';

import styles from './Header.module.css';

const header = () => {
  return (
    <header>
      <h1><a href="#"><span className={styles.Logo}>Conference</span>Works</a></h1>
      <nav>
        <a className={styles.NavItem} href="#">Schedule</a>
        <a className={styles.NavItem} href="#">Speakers</a>
      </nav>
    </header>
  );
};

export default header;