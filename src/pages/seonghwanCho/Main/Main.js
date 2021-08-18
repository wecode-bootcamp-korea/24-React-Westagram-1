import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <nav>
          <div className="nav">
            <div className="navLogo">
              <div className="navLogoCamera">
                <i className="fab fa-instagram"></i>
              </div>
              <div>westagram</div>
            </div>
            <div className="navSearch">
              <input type="text" placeholder="검색" />
            </div>
            <div>
              <ul className="navLink">
                <li>
                  <i className="fas fa-home"></i>
                </li>
                <li>
                  <i className="fas fa-location-arrow"></i>
                </li>
                <li>
                  <i className="far fa-compass"></i>
                </li>
                <li>
                  <i className="far fa-heart"></i>
                </li>
                <li>
                  <i className="fas fa-user-alt"></i>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>
          <div className="article">
            <article>
              <ul className="articleStory">
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
                <li>
                  <img src="/images/seonghwanCho/profile.jpeg" alt="wecode" />
                  <div>wecode</div>
                </li>
              </ul>
            </article>
            <article>
              <div className="articleProfile">
                <span className="articleUserImage">
                  <img
                    src="/images/seonghwanCho/profile.jpeg"
                    alt="wecode"
                    id="articleProfileImage"
                  />
                </span>
                <span>
                  <div className="articleUserName">
                    <strong>wecode_bootcamp</strong>
                  </div>
                  <div className="articleUserNameDiscription">
                    WeCode-위코드
                  </div>
                </span>
                <span className="articleViewMore">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </div>
              <div>
                <img
                  src="/images/seonghwanCho/wecode24_1.jpg"
                  alt="wecode"
                  className="articleImage"
                />
              </div>
              <div className="articleMenuBar">
                <ul className="articleMenuList">
                  <li>
                    <i className="far fa-heart"></i>
                  </li>
                  <li>
                    <i className="far fa-comment"></i>
                  </li>
                  <li>
                    <i className="fas fa-location-arrow"></i>
                  </li>
                </ul>
                <ul className="articleMenuList">
                  <li>
                    <i className="far fa-bookmark"></i>
                  </li>
                </ul>
              </div>
              <div className="likeBar">
                <span>
                  <img
                    src="/images/seonghwanCho/profile.jpeg"
                    alt="wecode"
                    id="userLikebarImage"
                  />
                </span>
                <span>
                  <strong>seonghwan</strong>님 <strong>외 34명</strong>이
                  좋아합니다
                </span>
              </div>
              <div className="descriptionBar">
                <div>
                  <p>
                    <span>wecode_bootcamp</span>"위코드는 단순 교육업체가 아닌
                    개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개
                    회사에서 오퍼를 받았습니다." - Wecode 졸업생 강병진님...
                  </p>
                </div>
                <div>20분 전</div>
                <div className="commentWindow">
                  <p className="commentBox">
                    <span>
                      <span className="commentId"></span>
                      <span className="commentContent"></span>
                    </span>
                    <span className="commentLikeBtn"></span>
                  </p>
                </div>
                <div className="commentBar">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    className="commentBarContent"
                  />
                  <button className="commentBarPostbtn">게시</button>
                </div>
              </div>
            </article>
            <article>
              <div className="articleProfile">
                <span className="articleUserImage">
                  <img
                    src="/images/seonghwanCho/profile.jpeg"
                    alt="wecode"
                    id="articleProfileImage"
                  />
                </span>
                <span>
                  <div className="articleUserName">
                    <strong>wecode_bootcamp</strong>
                  </div>
                  <div className="articleUserNameDiscription">
                    WeCode-위코드
                  </div>
                </span>
                <span className="articleViewMore">
                  <i className="fas fa-ellipsis-h"></i>
                </span>
              </div>
              <div>
                <img
                  src="/images/seonghwanCho/wecode24_2.jpeg"
                  alt="wecode"
                  className="articleImage"
                />
              </div>
              <div className="articleMenuBar">
                <ul className="articleMenuList">
                  <li>
                    <i className="far fa-heart"></i>
                  </li>
                  <li>
                    <i className="far fa-comment"></i>
                  </li>
                  <li>
                    <i className="fas fa-location-arrow"></i>
                  </li>
                </ul>
                <ul className="articleMenuList">
                  <li>
                    <i className="far fa-bookmark"></i>
                  </li>
                </ul>
              </div>
              <div className="likeBar">
                <span>
                  <img
                    src="/images/seonghwanCho/profile.jpeg"
                    alt="wecode"
                    id="userLikebarImage"
                  />
                </span>
                <span>
                  <strong>seonghwan</strong>님 <strong>외 34명</strong>이
                  좋아합니다
                </span>
              </div>
              <div className="descriptionBar">
                <div>
                  <p>
                    <span>wecode_bootcamp</span>"위코드는 단순 교육업체가 아닌
                    개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개
                    회사에서 오퍼를 받았습니다." - Wecode 졸업생 강병진님...
                  </p>
                </div>
                <div>20분 전</div>
                <div className="comment"></div>
                <div className="commentBar">
                  <input
                    type="text"
                    placeholder="댓글 달기..."
                    className="commentBarContent"
                  />
                  <button className="commentBarPostbtn">게시</button>
                </div>
              </div>
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
