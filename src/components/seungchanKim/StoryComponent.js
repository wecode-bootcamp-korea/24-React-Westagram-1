import React, { Component } from 'react';

class StoryComponent extends Component {
  render() {
    const { storytext } = this.props;
    return (
      <>
        <li>
          <img alt="my_photo_img" src="/images/seungchanKim/my_photo.jpeg" />
          <div className="stoy_name">{storytext}</div>
        </li>
      </>
    );
  }
}

export default StoryComponent;
