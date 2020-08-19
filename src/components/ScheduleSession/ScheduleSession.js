import React from 'react';

import styles from './ScheduleSession.module.css';

function nonSpeakerRow(id, times, talks) {
  if (talks.length === 1 && talks[0] === '[Transition]') {
    return (
      <tr key={id}>
        <td>{times[0]} - {times[1]}</td>
        <td className={styles.TransitionSession} colSpan={2}>{talks[0]}</td>
      </tr>
    );
  } else {
    return (
      <tr key={id}>
        <td>{times[0]} - {times[1]}</td>
        <td colSpan={2}>{talks[0]}</td>
      </tr>
    );
  }
}

function speakerRow(id, times, talks, speakers) {
  if (talks.length > 1) {
    return (
      <tr key={id}>
        <td>{times[0]} - {times[1]}</td>
        <td>
          <strong>{talks[0]}</strong>
          <br />
          {speakers[0]}
        </td>
        <td>
          <strong>{talks[1]}</strong>
          <br />
          {speakers[1]}
        </td>
      </tr>
    )
  } else {
    return (
      <tr key={id}>
        <td>{times[0]} - {times[1]}</td>
        <td colSpan={2}>
          <strong>{talks[0]}</strong>
          <br />
          {speakers[0]}
        </td>
      </tr>
    )
  }
}

const scheduleSession = (props) => {
  const { times, talks, speakers } = props.data;
  const id = props.id;

  if (speakers.length !== 0) {
    return speakerRow(id, times, talks, speakers)
  } else {
    return nonSpeakerRow(id, times, talks);
  }
};

export default scheduleSession;