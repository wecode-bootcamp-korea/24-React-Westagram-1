import React, { Component } from 'react';

class AsideComponent extends Component {
  render() {
    return (
      <>
        <li className="friend_list_1">
          <img alt="my_photo_img" src="/images/seungchanKim/my_photo.jpeg" />
          <div className="follow">
            <div className="seung_chan">k_seung_chan</div>
            <div className="seung_follow">승찬님 외 10명이 팔로우합니다.</div>
          </div>
          <div className="follow_me">팔로우</div>
        </li>
      </>
    );
  }
}

export default AsideComponent;
