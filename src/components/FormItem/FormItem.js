import React from 'react';

import styles from './FormItem.module.css';

const formItem = (props) => {
  return (
    <p className={styles.FormItem}>
      <label for={props.inputName}>{props.label} </label>
      <input name={props.inputName} type={props.inputType} required={props.required} />
      <span className={styles.Invalid}> &#10007; {props.validationMsg}</span>
      <span className={styles.Valid}> &#10003;</span>
    </p>
  );
};

export default formItem;