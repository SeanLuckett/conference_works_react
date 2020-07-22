import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Homepage from './components/homepage/Homepage';
import Register from './components/register/Register';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import styles from './App.module.css';

function App() {
  return (
    <section id="content" className={styles.App}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/"><Homepage /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>
      </Router>
      <Footer />
    </section>
  );
}

export default App;
