import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import TopBar from '../../src/javascript/TopBar.jsx';

describe('TopBar', () => {
  let props;
  let mountedTopBarScreen;

  const topBar = () => {
    if (!mountedTopBarScreen) {
      mountedTopBarScreen = mount(<TopBar />);
    }
    return mountedTopBarScreen;
  }

  beforeEach(() => {
    props = {
      buttonText: undefined,
      buttonUrl: undefined,
      titlePage: undefined,
    };
    mountedTopBarScreen = undefined;
  });

  it('should always render a <div>', () => {
    const divs = topBar().find('div');
    expect(divs).toBeGreaterThan(0);
  });
});
