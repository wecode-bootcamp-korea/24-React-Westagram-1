import React, { Component } from 'react';

class Icon extends Component {
  render() {
    const { item } = this.props;

    return (
      <li>
        <i className={item} />
      </li>
    );
  }
}

export default Icon;
