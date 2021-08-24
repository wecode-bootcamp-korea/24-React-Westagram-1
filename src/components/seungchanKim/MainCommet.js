import React from 'react';
import '../../pages/seungchanKim/Main/main.scss';

class MainCommet extends React.Component {
  render() {
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
                <i
                  className={this.props.like}
                  onClick={this.props.addLikeCount}
                ></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </div>
              <div className="book_mark">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="like">{this.props.likeCounter}</div>
            <div className="qa">
              <div className="kscname">{this.props.profile}</div>
              <div className="dogname">{this.props.feeds}</div>
            </div>
            <div className="qa_layout">
              <div className="qa_layout_1">
                <div className="qa_push_line">
                  {this.props.comments.map(b => {
                    return (
                      <div className="qa_layout_2" key={b.id}>
                        <span className="qa_name">{b.userId}</span>
                        <span className="qa_hello">{b.text}</span>
                        <div
                          className="qa_remove"
                          onClick={() => this.props.removeComment(b.id)}
                        >
                          X
                        </div>
                      </div>
                    );
                  })}
                  {this.props.commentList.map(a => {
                    return (
                      <div className="qa_layout_2" key={a.id}>
                        <span className="qa_name">{a.userId}</span>
                        <span className="qa_hello">{a.text}</span>
                        <div
                          className="qa_remove"
                          onClick={() => this.props.removeComment(a.id)}
                        >
                          X
                        </div>
                      </div>
                    );
                  })}
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
              value={this.props.commentValue}
              onChange={this.props.getInputValue}
            />
            <button
              type="submit"
              id="text_push"
              onClick={this.props.addComment}
            >
              게시
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default MainCommet;
