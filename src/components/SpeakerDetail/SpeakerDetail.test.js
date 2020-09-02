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
  const component = shallow(<SpeakerDetail match={{ path: 'speakers/john' }} />);

  it('displays speaker name', () => {
    expect(component.find('h1').text()).toBe('John Cleese');
  });

});
