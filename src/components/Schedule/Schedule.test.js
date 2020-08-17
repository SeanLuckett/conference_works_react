import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Schedule from './Schedule';

jest.mock('./scheduleData.js', () => {
  return {
    "sessions": [
      {
        "talk": "Our title",
        "times": ["8:00am", "9:00am"],
        "speaker": null
      },
      {
        "talk": "Speaker title",
        "times": ["8:00am", "9:00am"],
        "speaker": "Shaft"
      },
    ]
  };
});

configure({ adapter: new Adapter() })

//Given
const component = shallow(<Schedule />);

describe('<Schedule />', () => {
  it('renders a table', () => {
    expect(component.find('table')).toBeTruthy();
  });

  it('renders the header', () => {
    expect(component.find('thead').find('tr').childAt(1).text()).toBe('Grace Hopper Ballroom');
    expect(component.find('thead').find('tr').childAt(2).text()).toBe('Margaret Hamilton Ballroom');
  });

  it('renders two ScheduleSession components', () => {
    expect(component.find('tbody').children()).toHaveLength(2);
  });
});
