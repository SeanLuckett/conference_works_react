import React, { Component } from 'react';
import json from '../Speakers/speakerData';

class SpeakerDetail extends Component {
  state = json.speakers.find(speaker => {
    return speaker.id === this.props.match.path.split('/')[1]
  });

  render () {
    return (
      <h1>{this.state.name}</h1>
    );
  }
};

export default SpeakerDetail;