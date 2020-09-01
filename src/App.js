import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Schedule from './components/Schedule/Schedule';
import Speakers from './components/Speakers/Speakers';

function App() {
  return (
    <Router>
      <section><Header /></section>
      <main>
        <Switch>
          <Route path="/schedule" component={Schedule} />
          <Route exact path="/speakers" component={Speakers} />
          {/* <Route exact path="/speakers/:id" component={SpeakerDetail} /> */}
          <Route exact path="/">
            <p>Welcome to ConferenceWorks: a real website for a fake software conference.</p>
          </Route>
        </Switch>
      </main>
      <section>
        <Footer />
      </section>
    </Router>
  );
}

export default App;
