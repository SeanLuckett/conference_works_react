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
  
  it('renders "Schedule" link', () => {
    expect(component.find('a').at(1).text()).toBe('Schedule');
  });

  it('renders "Speakers" link', () => {
    expect(component.find('a').at(2).text()).toBe('Speakers');
  });
});