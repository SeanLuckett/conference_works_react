import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  const component = shallow(<Header />);

  it('renders logo', () => {
    expect(component.find('h1').text()).toBe('ConferenceWorks');
  });

  it('renders links', () => {
    expect(component.find('Link').at(0).text()).toBe('ConferenceWorks');
    expect(component.find('Link').at(1).text()).toBe('Schedule');
    expect(component.find('Link').at(2).text()).toBe('Speakers');
  });
});