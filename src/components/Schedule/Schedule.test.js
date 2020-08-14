import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Schedule from './Schedule';
import ScheduleData from './scheduleData';
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

describe('given a non-speaking session', () => {
  const nonSpeakerRow = component.find('tbody').find('tr').first();

  it('title spans 2 columns', () => {
    expect(nonSpeakerRow.childAt(1).prop('colSpan')).toBe(2);
  });

  it('renders first row with data', () => {
    expect(nonSpeakerRow.childAt(0).text()).toBe('8:00am - 9:00am');
    expect(nonSpeakerRow.childAt(1).text()).toBe(ScheduleData.sessions[0].talk);
  });

  it('does not bold the title', () => {
    expect(nonSpeakerRow.childAt(1).html()).not.toContain('<strong>');
  });
});

describe('given a single speaking session', () => {
  const speakerRow = component.find('tbody').find('tr').at(1);

  it('bolds the title', () => {
    expect(speakerRow.childAt(1).html()).toContain('<strong>');
  });

  it('includes the speaker as a subtitle', () => {
    expect(speakerRow.childAt(1).text()).toContain(ScheduleData.sessions[1].speaker);
  });
});