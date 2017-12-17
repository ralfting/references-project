import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BaseButton extends Component {
  constructor(props) {
    super(props);
    const { text, link } = props;

    this.state = {
      text,
      link,
    };
  }

  render() {
    return (
      <a
        href={this.state.link}
        className="rounded py-2 px-3 btn btn-green no-underline">
        { this.state.text }
      </a>
    );
  }
}

const propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

BaseButton.propTypes = propTypes;


export default BaseButton;
