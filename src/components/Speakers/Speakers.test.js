import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Speakers from './Speakers';

configure({ adapter: new Adapter() })

const component = shallow(<Speakers />);

jest.mock('./speakerData.js', () => {
  return {
    "speakers": [
      {
        "name": "John Cleese",
        "role": "President, Ministry of Silly Walks",
        "image": "john-300.jpg",
      },
      {
        "name": "King Arthur",
        "role": "King of Camelot",
        "image": "arthur-300.jpg",
      }
    ]
  };
});

describe('<Speakers />', () => {
  it('renders two Speaker components', () => {
    expect(component.find('speaker')).toHaveLength(2);
  });
});