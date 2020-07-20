import React from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Aux from './higher-order-components/Aux/Aux';

import styles from './App.module.css';

function App() {
  return (
    <section id="content" className={styles.App}>
      <Header />
      <section>
        <p>Welcome to ConferenceWorks: a real website for a fake software conference.</p>
        <p><a href="#">Register</a> now before this event sells out!</p>
      </section>
      <Footer />
    </section>
  );
}

export default App;
