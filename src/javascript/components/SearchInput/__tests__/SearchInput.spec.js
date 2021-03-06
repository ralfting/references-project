import React from 'react';
import { shallow, mount, render } from 'enzyme';

import SearchInput from '../index';

describe('SearchInput', () => {
  describe('input search', () => {
    it('should have a input', () => {
      const wrapper = shallow(<SearchInput />);
      expect(wrapper.find('input').length).toEqual(1);
    });

    it('should exist "query" state', () => {
      const wrapper = mount(<SearchInput />);
      expect(wrapper.state().query).not.toBeUndefined();
    });

    it('should update correcly "query" state when change input value', () => {
      const wrapper = mount(<SearchInput />);
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: 'Hello' } });

      expect(wrapper.state().query).toEqual('Hello');
    })
  });

  describe('button search', () => {
    it('should have a search button', () => {
      const wrapper = shallow(<SearchInput />);
      expect(wrapper.find('button').length).toEqual(1);
    });

    it('should called search() when button is clicked', () => {
      const wrapper = mount(<SearchInput />);
      const button = wrapper.find('button');
      const spy = jest.spyOn(wrapper.instance(), 'search');

      button.simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
});
