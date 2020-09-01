import React from 'react';
import { Route, Link } from 'react-router-dom'

import './Speaker.module.css';

const speaker = (props) => {
  const imageFolder = props.image.split('-')[0];

  return (
    <figure>
      <Link to={`/speakers/${imageFolder}`}>
        <img src={`${process.env.PUBLIC_URL}/images/speakers/${imageFolder}/${props.image}`} alt={props.name} />
        <figcaption>
          <span>{props.name}</span>
          <br />
          <span>{props.role}</span>
        </figcaption>
      </Link>
    </figure>
  )
};

export default speaker;