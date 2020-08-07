import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
  const component = shallow(<Footer />);

  it('renders company name', () => {
    expect(component.find('p').text()).toContain('ConferenceWorks');
  });

  it('renders the copyright with given year', () => {
    const thisYear = new Date().getFullYear()
    expect(component.find('p').text()).toContain(`© ${thisYear}`);
  });
});
