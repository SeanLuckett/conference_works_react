import React from 'react';
import { Link } from 'react-router-dom';

const homepage = () => {
  return (
    <section>
      <p>Welcome to ConferenceWorks: a real website for a fake software conference.</p>
      <p><Link to="/register">Register</Link> now before this event sells out!</p>
    </section>
  );
};

export default homepage;