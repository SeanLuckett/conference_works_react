import React from 'react';

import FormItem from '../FormItem/FormItem';
import styles from './Register.module.css';

const register = () => {
  return (
    <section>
      <h1>Register</h1>
      <form action="submit" className={styles.Form}>
        <FormItem inputName="first-name" label="First name" inputType="text" required={true} validationMsg={"Required"} />
        <FormItem inputName="last-name" label="Last name" inputType="text" required={true} validationMsg={"Required"}/>
        <FormItem inputName="email" label="Email" inputType="email" required={true} validationMsg={"Valid email"} />
        <FormItem inputName="password" label="Password" inputType="password" required={true} validationMsg={"Must be at least 8 characters"} />
        <formgroup className={styles.ButtonGroup}>
          <button className={styles.FormButton} type="submit">Register</button>
          <button className={styles.FormButton} type="reset">Reset</button>
        </formgroup>
      </form>
    </section>
  );
};

export default register;