import React from 'react';
import '../Main/main.scss';
import Nav from '../../../components/Nav/Nav';
import MainCommet from '../../../components/seungchanKim/MainCommet';
import Story from '../../../components/seungchanKim/Story';
import Aside from '../../../components/seungchanKim/Aside';

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
      .then(data => {
        this.setState({
          feedArr: data,
        });
      });
  }

  render() {
    return (
      <>
        <div>
          <Nav />
        </div>
        <div id="main_background">
          <div id="all">
            <div id="dia"></div>
            <div id="tri">
              <h4 id="current_search">최근 검색 항목</h4>
              <div></div>
            </div>
          </div>
          <main>
            <div id="container_1">
              <Story />
              {this.state.feedArr.map(feed => {
                console.log(feed);
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
