import React, { Component } from 'react';
// import ArticleContent from './MainComponent/ArticleContent';
import Comment from './comment';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
      count: 10,
    };
  }

  componentDidMount() {
    this.setState({ commentList: this.props.comment });
  }

  addComment = e => {
    e.preventDefault();
    if (this.state.commentValue) {
      const newItem = {
        commentId: this.state.count,
        commentUserName: 'choseonghwan',
        commentContent: this.state.commentValue,
        commentIsLiked: false,
      };

      this.setState({
        commentList: this.state.commentList.concat(newItem),
        commentValue: '',
        count: this.state.count + 1,
      });
    }
  };

  render() {
    return (
      <>
        <article>
          <div className="articleProfile">
            <span className="articleUserImage">
              <img
                src={this.props.userImage}
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
              src={this.props.contentImage}
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
                src={this.props.userImage}
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
                <span>wecode_bootcamp</span>"위코드는 단순 교육업체가 아닌
                개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개 회사에서
                오퍼를 받았습니다." - Wecode 졸업생 강병진님...
              </p>
            </div>
            <div>20분 전</div>
            <div className="commentWindow">
              {this.state.commentList.map(comment => {
                return (
                  <Comment
                    key={comment.commentId}
                    userName={comment.commentUserName}
                    content={comment.commentContent}
                    isLiked={comment.commentIsLiked}
                  />
                );
              })}
            </div>
            <div className="commentBar">
              <form onSubmit={this.addComment}>
                <input
                  value={this.state.commentValue}
                  type="text"
                  placeholder="댓글 달기..."
                  className="commentBarContent"
                  onChange={e =>
                    this.setState({ commentValue: e.target.value })
                  }
                />
              </form>
              <button className="commentBarPostbtn" onClick={this.addComment}>
                게시
              </button>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Feed;
