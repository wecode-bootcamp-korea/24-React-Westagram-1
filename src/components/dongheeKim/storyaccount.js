import React, { Component } from 'react';

class StoryAccount extends Component {
  render() {
    return (
      <div className="story-account">
        <div className="story_pic1 profile_pic"></div>

        <div className="profilename">
          <span className="bold">{this.props.profilename}</span>

          <span className="font-gray">{this.props.minutes} 전</span>
        </div>
      </div>
    );
  }
}

export default StoryAccount;
