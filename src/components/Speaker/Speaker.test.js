import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Speaker from './Speaker';

configure({ adapter: new Adapter() })

const speakerData = {
  name: "John Cleese",
  role: "President, Ministry of Silly Walks",
  image: "john-300.jpg",
}

const component = shallow(
  <Speaker
    name={speakerData.name}
    role={speakerData.role} image={speakerData.image} />
);

describe('<Speaker />', () => {
  it('displays a speaker name', () => {
    expect(component.find('figcaption').childAt(0).text()).toContain('John Cleese');
  });

  it('displays a speaker role', () => {
    expect(component.find('figcaption').childAt(2).text()).toContain('President, Ministry of Silly Walks')
  });

  it('displays a speaker image', () => {
    expect(component.find('img').prop('src')).toContain('/john/john-300.jpg');
    expect(component.find('img').prop('alt')).toContain('John Cleese');
  });
});