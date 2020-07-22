import React from 'react';

import styles from './Footer.module.css';

const footer = () => {
  return (
    <section>
      <footer>
        <p className={styles.Copyright}>&#169; 2020, <span>Conference</span> Works</p>
      </footer>
    </section>
  )
};

export default footer;