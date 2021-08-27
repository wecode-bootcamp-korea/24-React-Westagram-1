import React, { Component } from 'react';
import Nav from '../../../components/Nav/Nav';
import SidebarRecomUser from '../../../components/seonghwanCho/SidebarRecomUser';
import ArticleStory from '../../../components/seonghwanCho/ArticleStory';
import Feed from '../../../components/seonghwanCho/Feed';
import './Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
      commentValue: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData_seonghwan.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="main">
        <Nav />
        <main>
          <div className="article">
            <article>
              <ul className="articleStory">
                <ArticleStory />
                <ArticleStory />
              </ul>
            </article>
            {feedList.map(feed => {
              return (
                <Feed
                  key={feed.feedId}
                  userName={feed.feedUserName}
                  userImage={feed.feedUserImage}
                  contentImage={feed.feedContentImage}
                  like={feed.feedLike}
                  bookMark={feed.feedBookMark}
                  comment={feed.feedComment}
                />
              );
            })}
          </div>
          <aside>
            <div className="sideBar">
              <div className="sideBarUser">
                <span>
                  <img
                    src="/images/seonghwanCho/profile.jpeg"
                    alt="wecode"
                    id="sideBarUserImage"
                  />
                </span>
                <span>
                  <div>wecode_bootcamp</div>
                  <div>WeCode | 위코드</div>
                </span>
              </div>
              <div className="sideBarRecommen">
                <div className="sideBarRecommenTop">
                  <span className="sideBarRecommenTopGr">
                    회원님을 위한 추천
                  </span>
                  <span className="sideBarRecommenTopVm">
                    <a href="https://www.instagram.com/explore/people/suggested/">
                      모두보기
                    </a>
                  </span>
                </div>
                <SidebarRecomUser />
              </div>
              <div className="footerLink">
                <a href="https://about.instagram.com/">소개</a>
                <a href="https://help.instagram.com/">도움말</a>
                <a href="https://about.instagram.com/blog">홍보 센터</a>
                <a href="https://developers.facebook.com/docs/instagram">API</a>
                <a href="https://about.instagram.com/about-us/careers">
                  채용 정보
                </a>
                <a href="https://www.instagram.com/legal/privacy/">
                  개인정보처리방침
                </a>
                <a href="https://www.instagram.com/legal/terms/">약관</a>
                <a href="https://www.instagram.com/explore/locations/">위치</a>
                <a href="https://www.instagram.com/directory/profiles/">
                  인기계정
                </a>
                <a href="https://www.instagram.com/directory/hashtags/">
                  해시태그
                </a>
              </div>
            </div>
          </aside>
        </main>
      </div>
    );
  }
}

export default Main;
