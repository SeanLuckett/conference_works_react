import React from 'react';

import styles from './FormItem.module.css';

const formItem = (props) => {
  return (
    <label className={styles.FormItem}>
      {props.label} <input type={props.inputType} />
    </label>
  );
};

export default formItem;