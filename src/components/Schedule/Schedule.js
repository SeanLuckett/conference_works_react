import React from 'react';

import json from './scheduleData';

export default class Schedule extends React.Component {
  constructor() {
    super();
    this.state = json;
  }

  buildRows() {
    return this.state.sessions.map((session, index) => {
      return (
        <tr key={index}>
          <td>{session.times[0]} - {session.times[1]}</td>
          <td colSpan={2}>{session.talk}</td>
        </tr>
      );
    })
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Grace Hopper Ballroom</th>
            <th>Margaret Hamilton Ballroom</th>
          </tr>
        </thead>
        <tbody>
          {this.buildRows()}
        </tbody>
      </table>
    )
  }
};
