import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../../../components/dongheeKim/feeds';
import Comment from '../../../components/dongheeKim/comment';
import '../../../components/Nav/Nav.scss';
import './Main.scss';

class MainDonghee extends Component {
  constructor() {
    super();
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedsData_donghee.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  getComment = event => {
    this.setState({
      value: event.target.value,
    });
  };

  createComment = e => {
    const comment = {
      idx: Date.now(),
      accountName: 'donghee',
      commentInput: this.state.value,
    };

    this.setState({
      commentList: this.state.commentList.concat(comment),
    });
    var input = document.getElementsByClassName('feeds-comment_box')[0];
    input.value = null;
  };

  createCommentEnter = e => {
    if (e.key === 'Enter') {
      this.createComment();
    }
  };

  render() {
    return (
      <div className="MainDonghee">
        <Nav />
        <main>
          <div className="feeds-wrap">
            {this.state.feeds.map(feed => {
              return <Feeds comments={feed.comments} feedsContents={feed} />;
            })}
          </div>
          <div className="profile">
            <div className="myProfile">
              <div className="myProfile-pic"></div>

              <div className="profilename">
                <span className="bold">dlwlrma</span>

                <span className="font-gray">이지금 IU</span>
              </div>
            </div>

            <div className="story">
              <div className="profile_header">
                <span className="font-graybold">스토리</span>

                <span className="bold">모두보기</span>
              </div>

              <div className="story-account">
                <div className="story_pic1 profile_pic"></div>

                <div className="profilename">
                  <span className="bold">wecode_bootcamp</span>

                  <span className="font-gray">5분 전</span>
                </div>
              </div>

              <div className="story-account">
                <div className="story_pic2 profile_pic"></div>

                <div className="profilename">
                  <span className="bold">kimyk10</span>

                  <span className="font-gray">10분 전</span>
                </div>
              </div>

              <div className="story-account">
                <div className="story_pic3 profile_pic"></div>

                <div className="profilename">
                  <span className="bold">songkang_b</span>

                  <span className="font-gray">30분 전</span>
                </div>
              </div>
            </div>

            <div className="recommend">
              <div className="profile_header">
                <span className="font-graybold">회원님을 위한 추천</span>

                <span className="bold">모두보기</span>
              </div>

              <div className="recommend-wrap">
                <div className="recommend-account">
                  <div className="recommend-pic1 profile_pic"></div>

                  <div className="profilename">
                    <span className="bold">byemypie</span>

                    <span className="font-gray">songkang_b님 외 10분이...</span>
                  </div>
                </div>

                <span className="font-blue">팔로우</span>
              </div>

              <div className="recommend-wrap">
                <div className="recommend-account">
                  <div className="recommend-pic2 profile_pic"></div>

                  <div className="profilename">
                    <span className="bold">verte.official</span>

                    <span className="font-gray">hayeonsoo_님 외 30분이...</span>
                  </div>
                </div>

                <span className="font-blue">팔로우</span>
              </div>

              <div className="recommend-wrap">
                <div className="recommend-account">
                  <div className="recommend-pic3 profile_pic"></div>

                  <div className="profilename">
                    <span className="bold">woo_238</span>

                    <span className="font-gray">kimyk10님 외 20분이...</span>
                  </div>
                </div>

                <span className="font-blue">팔로우</span>
              </div>
            </div>

            <div className="info">
              <p className="font-graysmall">
                소개 · 도움말 · 홍보 센터 · API · 채용 정보 ·
                <br />
                개인정보처리방침 · 약관 · 위치 · 인기 계정 · 해시태그 · 언어{' '}
                <br />
                <br />© 2021 INSTAGRAM FROM FACEBOOK
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MainDonghee;
