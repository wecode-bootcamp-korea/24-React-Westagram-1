import React from 'react';
import '../../pages/seungchanKim/Main/main.scss';
import CommentList from './CommentList';

class MainCommet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
      like: 'far fa-heart',
      likeCounter: '좋아요 41개', //원래는 counter 처리 보여주기 위해서 이렇게 처리함
    };
  }

  removeComment = id => {
    const filteredComments = this.state.commentList.filter(
      comment => comment.id !== id
    );
    this.setState({ commentList: filteredComments });
  };

  addLikeCount = () => {
    if (this.state.like == 'far fa-heart') {
      this.setState({
        like: 'fas fa-heart',
        likeCounter: '좋아요 42개',
      });
    } else if (this.state.like == 'fas fa-heart') {
      this.setState({
        like: 'far fa-heart',
        likeCounter: '좋아요 41개',
      });
    }
  };

  getInputValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList } = this.state;
    const newComment = {
      id: commentList.length + 1,
      userId: 'K_seung_chan',
      text: this.state.commentValue,
    };
    this.setState({
      commentList: [...commentList, newComment],
      commentValue: '',
    });
  };

  render() {
    const { commentList, commentValue, like, likeCounter } = this.state;
    const { profile, feeds, comments } = this.props;
    return (
      <>
        <div id="self_main">
          <div id="main_id">
            <div className="customer_id">
              <img
                alt="my_photo_img"
                src="/images/seungchanKim/my_photo.jpeg"
              />
              <div>k_seung_chan</div>
            </div>
            <div className="main_id_icon">
              <i id="dot" className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div id="main_img">
            <img alt="moong_gu" src="/images/seungchanKim/IMG_2625-1.jpg" />
          </div>
          <div id="main_content">
            <div id="many_icon">
              <div className="icon">
                <i className={like} onClick={this.addLikeCount}></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </div>
              <div className="book_mark">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="like">{likeCounter}</div>
            <div className="qa">
              <div className="kscname">{profile}</div>
              <div className="dogname">{feeds}</div>
            </div>
            <div className="qa_layout">
              <div className="qa_layout_1">
                <div className="qa_push_line">
                  {comments.map(b => {
                    return (
                      <div className="qa_layout_2" key={b.id}>
                        <span className="qa_name">{b.userId}</span>
                        <span className="qa_hello">{b.text}</span>
                      </div>
                    );
                  })}
                  <CommentList
                    commentList={commentList}
                    removeComment={this.removeComment}
                  />
                </div>
              </div>
            </div>
            <div id="watch">2시간 전</div>
          </div>
          <form id="main_input" type="submit">
            <i className="far fa-smile"></i>
            <input
              type="text"
              placeholder="댓글 달기..."
              id="main_input_1"
              value={commentValue}
              onChange={this.getInputValue}
            />
            <button type="submit" id="text_push" onClick={this.addComment}>
              게시
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default MainCommet;
