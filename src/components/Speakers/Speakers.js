import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Speaker from '../Speaker/Speaker';
import json from './speakerData';

export default class Speakers extends React.Component {
  state = json;

  speakers = this.state.speakers.map((speaker, index) => {
    return (
      <Speaker
        key={index}
        name={speaker.name}
        role={speaker.role}
        image={speaker.image} />
    );
  })

  render() {
    return (
      <Fragment>
        {this.speakers}
      </Fragment>
    )
  }
};

