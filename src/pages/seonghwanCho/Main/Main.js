import React, { Component } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import ArticleStory from './MainComponent/ArticleStory';
import ArticleContent from './MainComponent/ArticleContent';
import SidebarRecomUser from './MainComponent/SidebarRecomUser';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Nav />
        <main>
          <div className="article">
            <article>
              <ul className="articleStory">
                <ArticleStory />
                <ArticleStory />
                <ArticleStory />
                <ArticleStory />
                <ArticleStory />
                <ArticleStory />
                <ArticleStory />
                <ArticleStory />
              </ul>
            </article>
            <article>
              <ArticleContent />
            </article>
            <article>
              <ArticleContent />
            </article>
            <article>
              <ArticleContent />
            </article>
            <article>
              <ArticleContent />
            </article>
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
                <SidebarRecomUser />
                <SidebarRecomUser />
                <SidebarRecomUser />
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
