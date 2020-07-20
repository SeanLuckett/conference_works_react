import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Aux from './higher-order-components/Aux/Aux';

import styles from './App.module.css';

function App() {
  return (
    <Aux className={styles.App}>
      <Header />
      <Footer />
    </Aux>
  );
}

export default App;
