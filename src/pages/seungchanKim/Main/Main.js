import React from 'react';
import Nav from '../../../components/Nav/Nav';
import MainCommet from '../../../components/seungchanKim/MainCommet';
import Story from '../../../components/seungchanKim/Story';
import Aside from '../../../components/seungchanKim/Aside';
import '../Main/main.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedArr: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/commentData_seungchan.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(feeddata => {
        this.setState({
          feedArr: feeddata,
        });
      });
  }

  render() {
    const { feedArr } = this.state;
    return (
      <>
        <div>
          <Nav />
        </div>
        <div className="main_background">
          <div className="all">
            <div className="dia"></div>
            <div className="tri">
              <h4 className="current_search">최근 검색 항목</h4>
              <div></div>
            </div>
          </div>
          <main>
            <div className="container_1">
              <Story />
              {feedArr.map(feed => {
                return (
                  <MainCommet
                    profile={feed.profile}
                    feeds={feed.comment}
                    comments={feed.comments}
                  />
                );
              })}
            </div>
            <Aside />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
