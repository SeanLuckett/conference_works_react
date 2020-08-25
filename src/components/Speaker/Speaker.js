import React from 'react';

const speaker = (props) => {
  const imageFolder = props.image.split('-')[0];
  
  return (
    <figure>
      <a href="">
        <img src={`${process.env.PUBLIC_URL}/images/speakers/${imageFolder}/${props.image}`} alt={props.name} />
        <figcaption>
          <span>{props.name}</span>
          <br />
          <span>{props.role}</span>
        </figcaption>
      </a>
    </figure>
  )
};

export default speaker;