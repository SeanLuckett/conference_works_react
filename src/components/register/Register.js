import React from 'react';

import FormItem from '../FormItem/FormItem';
import styles from './Register.module.css';

const register = () => {
  return (
    <section>
      <h1>Register</h1>
      <form action="submit" className={styles.Form}>
        <FormItem label="First name" inputType="text" />
        <FormItem label="Last name" inputType="text" />
        <FormItem label="Email" inputType="email" />
        <FormItem label="Password" inputType="password" />
      </form>
    </section>
  );
};

export default register;