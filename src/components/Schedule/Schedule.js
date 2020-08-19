import React, { Fragment } from 'react';

import ScheduleSession from '../ScheduleSession/ScheduleSession';
import './Schedule.module.css';

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
      <Fragment>
        <h1>Schedule</h1>

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
      </Fragment>
    )
  }
};
