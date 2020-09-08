import React, { useState } from 'react';

import styles from './FormItem.module.css';

const FormItem = (props) => {
  const validMsg = <span className={styles.Valid}> &#10003;</span>;
  const invalidMsg = <span className={styles.Invalid}> &#10007; {props.validationMsg}</span>;

  const [validationMsg, setValidationMsg] = useState(invalidMsg);

  const isValid = (event) => {
    if (event.target.validity.valid) {
      setValidationMsg(validMsg);
    } else {
      setValidationMsg(invalidMsg);
    }
  }

  return (
    <p className={styles.FormItem}>
      <label for={props.inputName}>{props.label} </label>
      <input
        id={props.inputName}
        name={props.inputName}
        type={props.inputType}
        placeholder={props.placeholder}
        minlength={props.minlength}
        required={props.required}
        onChange={(event) => { isValid(event) }} />

      { validationMsg }
    </p>
  );
};

export default FormItem;