import React from 'react';
import AsideComponent from './AsideComponent';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    };
  }
  render() {
    return (
      <>
        <div className="container_2">
          <div className="nickname">
            <img alt="my_photo_img" src="/images/seungchanKim/my_photo.jpeg" />
            <div className="ksc">k_seung_chan</div>
            <div className="ksc_change">전환</div>
          </div>
          <div className="recommend">
            <div className="customer_recommend">회원님을 위한 추천</div>
            <div className="all_look">모두 보기</div>
          </div>
          <ul className="friend_list">
            {this.state.friendList.map(friend => {
              return <AsideComponent key={friend.id} />;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Aside;
