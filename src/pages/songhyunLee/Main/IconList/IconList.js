import React, { Component } from 'react';
import Icon from './Icon';

class IconList extends Component {
  render() {
    const feeds_icons = [
      'far fa-heart icon',
      'far fa-comment icon',
      'fas fa-location-arrow icon',
      'far fa-bookmark icon',
    ];
    return (
      <ul className="feeds-icons">
        {feeds_icons.map(item => (
          <Icon item={item} />
        ))}
      </ul>
    );
  }
}

export default IconList;
