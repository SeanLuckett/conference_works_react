import React from 'react';

import FormItem from '../FormItem/FormItem';
import styles from './Register.module.css';

const register = () => {
  return (
    <section>
      <h1>Register</h1>
      <form className={styles.Form}>
        <FormItem
          inputName="firstname"
          label="First Name"
          inputType="text"
          placeholder="Jane"
          required={true}
          validationMsg={"Required"} />

        <FormItem
          inputName="lastname"
          label="Last Name"
          inputType="text"
          placeholder="Doe"
          required={true}
          validationMsg={"Required"} />

        <FormItem
          inputName="email"
          label="Email"
          inputType="email"
          placeholder="jane.doe@example.com"
          required={true}
          validationMsg={"Valid email required"} />

        <FormItem
          inputName="password"
          label="Password"
          inputType="password"
          minlength="8"
          required={true}
          validationMsg={"Must be at least 8 characters"} />

        <fieldset className={styles.ButtonGroup}>
          <button className={styles.FormButton} type="submit">Register</button>
          <button className={styles.FormButton} type="reset">Reset</button>
        </fieldset>
      </form>
    </section>
  );
};

export default register;