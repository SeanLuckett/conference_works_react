import React from 'react';

import ScheduleSession from '../ScheduleSession/ScheduleSession';
import json from './scheduleData';

export default class Schedule extends React.Component {
  state = json;

  buildRows() {
    return this.state.sessions.map((session, index) => {
      return (
        <ScheduleSession key={index} data={session} />
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
