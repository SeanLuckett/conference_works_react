import React from 'react';
import { Route, Link } from 'react-router-dom'

import './Speaker.module.css';

const speaker = (props) => {
  const { id, name, image, role } = props;

  return (
    <figure>
      <Link to={`/speakers/${id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/speakers/${id}/${image}`} alt={name} />
        <figcaption>
          <span>{name}</span>
          <br />
          <span>{role}</span>
        </figcaption>
      </Link>
    </figure>
  )
};

export default speaker;