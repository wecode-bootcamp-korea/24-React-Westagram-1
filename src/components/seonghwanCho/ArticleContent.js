import React, { Component } from 'react';

class ArticleContent extends Component {
  render() {
    return (
      <>
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
            <div className="articleUserNameDiscription">WeCode-위코드</div>
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
            <strong>seonghwan</strong>님 <strong>외 34명</strong>이 좋아합니다
          </span>
        </div>
        <div className="descriptionBar">
          <div>
            <p>
              <span>wecode_bootcamp</span>"위코드는 단순 교육업체가 아닌 개발자
              커뮤니티입니다. Wecode에서 배우고 저는 총 5개 회사에서 오퍼를
              받았습니다." - Wecode 졸업생 강병진님...
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
      </>
    );
  }
}

export default ArticleContent;
