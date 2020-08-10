import React from 'react';

import styles from './Footer.module.css';
const setYear = () => {
  return new Date().getFullYear();
};

const footer = () => {
  return (
    <footer>
      <p>&copy; {setYear()}, <span>Conference</span>Works</p>
   </footer> 
  );
};

export default footer;