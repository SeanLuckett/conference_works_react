import React from 'react';

import styles from './Header.module.css';

const header = () => {
  return (
    <section>
      <header className={styles.Navbar}>
        <div className={styles.Logo}>
          <a href="#"><span>Conference</span>Works</a>
        </div>
        <a href="#" className={styles.NavItem}>Schedule</a>
        <a href="#" className={styles.NavItem}>Speakers</a>
      </header>
    </section>
  )
};

export default header;