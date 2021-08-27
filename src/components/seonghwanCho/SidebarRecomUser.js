import React, { Component } from 'react';

class SidebarRecomUser extends Component {
  render() {
    return (
      <>
        <div className="sideBarRecommenMain">
          <div>
            <img
              src="/images/seonghwanCho/profile.jpeg"
              alt="wecode"
              id="sideBarRecommenUserImage"
            />
          </div>
          <div className="sideBarRecommenUserProfile">
            아이디
            <br />
            15분전
          </div>
          <div className="sideBarRecommenUserfollow">팔로우</div>
        </div>
      </>
    );
  }
}

export default SidebarRecomUser;
