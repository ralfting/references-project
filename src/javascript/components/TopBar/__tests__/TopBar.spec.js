import React from 'react';
import { shallow, mount } from 'enzyme';
import TopBar from '../index';

describe('TopBar', () => {
  it('should always render <div>', () => {
    const wrapper = shallow(<TopBar title="Hello World" />);
    expect(wrapper.find('div').length).toBeGreaterThan(0);
  });
  it('should have a text "Title My Project" inside h1 tag', () => {
    const wrapper = shallow(<TopBar title="Title My Project" />);
    expect(wrapper.find('h1').text()).toEqual('Title My Project');
  });

  it('should exist Register Button', () => {
    const wrapper = mount(<TopBar title="Title" />);
    expect(wrapper.find('a').length).toEqual(1);
  });
});
