import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <>
        <div id="container_2">
          <div id="nickname">
            <img alt="my_photo_img" src="/images/seungchanKim/my_photo.jpeg" />
            <div id="ksc">k_seung_chan</div>
            <div id="ksc_change">전환</div>
          </div>
          <div id="recommend">
            <div id="customer_recommend">회원님을 위한 추천</div>
            <div id="all_look">모두 보기</div>
          </div>
          <ul id="friend_list">
            <li className="friend_list_1">
              <img
                alt="my_photo_img"
                src="/images/seungchanKim/my_photo.jpeg"
              />
              <div className="follow">
                <div className="seung_chan">k_seung_chan</div>
                <div className="seung_follow">
                  승찬님 외 10명이 팔로우합니다.
                </div>
              </div>
              <div className="follow_me">팔로우</div>
            </li>
            <li className="friend_list_1">
              <img
                alt="my_photo_img"
                src="/images/seungchanKim/my_photo.jpeg"
              />
              <div className="follow">
                <div className="seung_chan">k_seung_chan</div>
                <div className="seung_follow">
                  승찬님 외 10명이 팔로우합니다.
                </div>
              </div>
              <div className="follow_me">팔로우</div>
            </li>
            <li className="friend_list_1">
              <img
                alt="my_photo_img"
                src="/images/seungchanKim/my_photo.jpeg"
              />
              <div className="follow">
                <div className="seung_chan">k_seung_chan</div>
                <div className="seung_follow">
                  승찬님 외 10명이 팔로우합니다.
                </div>
              </div>
              <div className="follow_me">팔로우</div>
            </li>
            <li className="friend_list_1">
              <img
                alt="my_photo_img"
                src="/images/seungchanKim/my_photo.jpeg"
              />
              <div className="follow">
                <div className="seung_chan">k_seung_chan</div>
                <div className="seung_follow">
                  승찬님 외 10명이 팔로우합니다.
                </div>
              </div>
              <div className="follow_me">팔로우</div>
            </li>
            <li className="friend_list_1">
              <img
                alt="my_photo_img"
                src="/images/seungchanKim/my_photo.jpeg"
              />
              <div className="follow">
                <div className="seung_chan">k_seung_chan</div>
                <div className="seung_follow">
                  승찬님 외 10명이 팔로우합니다.
                </div>
              </div>
              <div className="follow_me">팔로우</div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Aside;
