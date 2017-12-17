import React from 'react';
import { shallow, mount } from 'enzyme';
import BaseButton from '../BaseButton';

describe('BaseButton', () => {
  it('should verify exist <a> tag', () => {
    const wrapper = shallow(<BaseButton link="some-link" text="Texto" />);
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('should set text correcly when is passed', () => {
    const wrapper1 = shallow(<BaseButton link="some-link" text="Name Button" />);
    const wrapper2 = shallow(<BaseButton link="some-link" text="Register Button" />);

    expect(wrapper1.find('a').text()).toEqual('Name Button');
    expect(wrapper2.find('a').text()).toEqual('Register Button');
  });

  it('should set href link correclty when is passed', () => {
    const wrapper1 = shallow(
      <BaseButton
        text="Name Button"
        link="go-to-the-contact" />
    );
    const wrapper2 = shallow(
      <BaseButton
        text="Name Button"
        link="go-to-the-support" />
    );

    expect(wrapper1.props().href).toEqual("go-to-the-contact");
    expect(wrapper2.props().href).toEqual("go-to-the-support");
  });
});
