import React from 'react';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import speaker from '../Speaker/Speaker';

import SpeakerDetail from './SpeakerDetail';

configure({ adapter: new Adapter() })

jest.mock('../Speakers/speakerData', () => {
  return {
    speakers: [{
      id: "john",
      name: "John Cleese",
      image: "john-300.jpg",
      about: ["Paragraph 1", "Paragraph 2"],
      talks: ["Talk 1", "Talk 2"],
    },
    {
      id: "monty",
      name: "Monty Python",
      image: "monty-300.jpg",
      about: ["Paragraph 1"],
      talks: ["Talk 1"]
    }]
  }
});

describe('<SpeakerDetail />', () => {
  const component = shallow(<SpeakerDetail match={{ params: { id: 'john' } }} />);

  it('displays speaker name', () => {
    expect(component.find('h1').text()).toBe('John Cleese');
  });

  it('displays an image of the speaker', () => {
    expect(component.find('img').prop('src')).toContain('/john/john-300.jpg');
    expect(component.find('img').prop('alt')).toContain('John Cleese');
  });

  it('displays an About section', () => {
    expect(component.find('h2').at(0).text()).toBe('About');
    expect(component.find('p').at(0).text()).toBe('Paragraph 1');
    expect(component.find('p').at(1).text()).toBe('Paragraph 2');
  });

  it('displays speaker talks', () => {
    expect(component.find('h2').at(1).text()).toBe('Talks');
    expect(component.find('li').at(0).text()).toBe('Talk 1');
    expect(component.find('li').at(1).text()).toBe('Talk 2');
  });
});
