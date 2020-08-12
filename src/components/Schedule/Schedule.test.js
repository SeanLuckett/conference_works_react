import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Schedule from './Schedule';
import ScheduleData from './scheduleData';
jest.mock('./scheduleData.js', () => {
  return {
    "sessions": [
      {
        "talk": "Our title",
        "times": ["8:00am", "9:00am"]
      }
    ]
  }; 
});

configure({ adapter: new Adapter() })

  const component = shallow(<Schedule />);
describe('<Schedule />', () => {
  //Given

  it('renders a table', () => {
    expect(component.find('table')).toBeTruthy();
  });

  it('renders the header', () => {
    expect(component.find('thead').find('tr').childAt(1).text()).toBe('Grace Hopper Ballroom');
    expect(component.find('thead').find('tr').childAt(2).text()).toBe('Margaret Hamilton Ballroom');
  });
});

describe('given a single session', () => {
  it('title spans 2 columns', () => {
    const firstRow = component.find('tbody').find('tr');
    expect(firstRow.childAt(1).prop('colSpan')).toBe(2);
  });

  it('renders first row with data', () => {
    const firstRow = component.find('tbody').find('tr');
    expect(firstRow.childAt(0).text()).toBe('8:00am - 9:00am');
    expect(firstRow.childAt(1).text()).toBe(ScheduleData.sessions[0].talk);
  });
});