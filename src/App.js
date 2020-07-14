import React from 'react';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <section>
        <header className={classes.Navbar}>
          <div className={classes.Logo}>
            <a href="#"><span>Conference</span>Works</a>
          </div>
          <a href="#" className={classes.NavItem}>Schedule</a>
          <a href="#" className={classes.NavItem}>Speakers</a>
        </header>
      </section>
    </div>
  );
}

export default App;
