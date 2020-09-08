import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Schedule from './components/Schedule/Schedule';
import Speakers from './components/Speakers/Speakers';
import SpeakerDetail from './components/SpeakerDetail/SpeakerDetail';
import Register from "./components/Register/Register";

function App() {
  return (
    <Router>
      <section><Header /></section>
      <main>
        <Switch>
        <Route path="/register"><Register /></Route>
        <Route path="/schedule" component={Schedule} />
        <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/speakers/:id" component={SpeakerDetail} />
        <Route exact path="/">
          <p>Welcome to ConferenceWorks: a real website for a fake software conference.</p>
          <p><Link to='/register'>Register</Link> now before this event sells out!</p>
        </Route>
        </Switch>
      </main>
    <section>
      <Footer />
    </section>
    </Router >
  );
}

export default App;
