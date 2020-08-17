import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ScheduleSession from './ScheduleSession';

configure({ adapter: new Adapter() })

describe('given a non-speaking session', () => {
  const expectedData = {
    "talk": "Conference Check-in and Registration",
    "speaker": null,
    "times": ["7:00am", "8:00am"]
  }
  // given
  const component = shallow(<ScheduleSession id={1} data={expectedData} />);
  const row = component.find('tr');

  it('title spans 2 columns', () => {
    expect(row.childAt(1).prop('colSpan')).toBe(2);
  });

  it('renders row with times and title', () => {
    expect(row.childAt(0).text()).toBe('7:00am - 8:00am');
    expect(row.childAt(1).text()).toBe(expectedData.talk);
  });

  it('does not bold the title', () => {
    expect(row.childAt(1).html()).not.toContain('<strong>');
  });
});

describe('given a single speaking session', () => {
  const expectedData = {
    "talk": "Speaker title",
    "times": ["8:00am", "9:00am"],
    "speaker": "Shaft"
  };
  // given
  const component = shallow(<ScheduleSession id={1} data={expectedData} />);
  const speakerRow = component.find('tr');

  it('bolds the title', () => {
    expect(speakerRow.childAt(1).html()).toContain('<strong>');
  });

  it('includes the speaker as a subtitle', () => {
    expect(speakerRow.childAt(1).text()).toContain(expectedData.speaker);
  });
});

describe('given a two-speaker session', () => {
  const expectedData = {
    "talks": ["The Decentralized Web", "Microservices Caching Strategies"],
    "speakers": ["Brian Sletten", "Mark Richards"],
    "times": ["9:00am", "10:30am"]
  }

  // given
  const component = shallow(<ScheduleSession id={1} data={expectedData} />);
  const speakerRow = component.find('tr');

  it('renders the first presentation', () => {
    expect(speakerRow.childAt(1).text()).toContain(expectedData.talks[0])
    expect(speakerRow.childAt(1).text()).toContain(expectedData.speakers[0])
  });

  it('renders the second presentation', () => {
    expect(speakerRow.childAt(2).text()).toContain(expectedData.talks[1])
    expect(speakerRow.childAt(2).text()).toContain(expectedData.speakers[1])
  });
});