import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <section><Header /></section>
      <section>
        <p>Welcome to ConferenceWorks: a real website for a fake software conference.</p>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
