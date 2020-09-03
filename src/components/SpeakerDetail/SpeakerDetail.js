import React, { Component, Fragment } from 'react';
import json from '../Speakers/speakerData';

class SpeakerDetail extends Component {
  state = json.speakers.find(speaker => {
    return speaker.id === this.props.match.params.id
  });

  render() {
    const { about, talks, name, id, image } = this.state;

    const aboutText = about.map((paragraph, index) => {
      return <p key={index}>{paragraph}</p>
    });

    const talkList = talks.map((talk, index) => {
      return <li key={index}>{talk}</li>
    });

    return (
      <Fragment>
        <h1>{name}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/speakers/${id}/${image}`}
          alt={name} />

        <section>
          <h2>About</h2>
          {aboutText}
        </section>

        <section>
          <h2>Talks</h2>
          <ul>
            {talkList}
          </ul>
        </section>
      </Fragment>
    );
  }
};

export default SpeakerDetail;