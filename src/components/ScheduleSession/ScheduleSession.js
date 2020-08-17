import React from 'react';

function nonSpeakerRow(id, times, talks) {
  return (
    <tr key={id}>
      <td>{times[0]} - {times[1]}</td>
      <td colSpan={2}>{talk}</td>
    </tr>
  );
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