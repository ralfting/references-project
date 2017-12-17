import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BaseLink from '../Base/BaseButton';

const propTypes = {
  title: PropTypes.string.isRequired,
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    const { title } = props;

    this.state = {
      title,
    };
  }

  render() {
    return (
      <div className="flex flex-wrap w-full p-6 mb-8 bg-black">
        <div className="container mx-auto flex items-center">
          <h1 className="w-1/4 text-white text-xl">
            { this.state.title }
          </h1>
          <div className="w-3/4 text-right">
            <BaseLink
              text="Create a New Study Tree"
              link="go"
            />
          </div>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = propTypes;

export default TopBar;
