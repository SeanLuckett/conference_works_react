import React, { Fragment } from 'react';

import styles from './ScheduleSession.module.css';

function addTimes(times) {
  return <td>{times[0]} - {times[1]}</td>
}

function addNonSpeakerSlot(talks) {
  if (talks.length === 1 && talks[0] === '[Transition]') {
    return <td className={styles.TransitionSession} colSpan={2}>{talks[0]}</td>;
  }

  return <td colSpan={2}>{talks[0]}</td>
}

function addSpeakerSlots(talks, speakers) {
  const isSingleSpeaker = talks.length === 1 ? 2 : null;

  return (
    <Fragment>
      {talks.map((talk, index) => {
        return (
          <td key={index} colSpan={isSingleSpeaker}>
            <strong>{talk}</strong>
            <br />
            {speakers[index]}
          </td>)
      })}
    </Fragment>
  );
}

const scheduleSession = (props) => {
  const { times, talks, speakers } = props.data;
  const id = props.id;

  return (
    <tr key={id}>
      {addTimes(times)}
      {speakers.length === 0 ? addNonSpeakerSlot(talks) : addSpeakerSlots(talks, speakers)}
    </tr>
  )
};

export default scheduleSession;