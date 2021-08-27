import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentLikeBtn: 'far fa-heart commnetLikeBtnOff',
      commentLikeBtnState: this.props.isLiked,
    };
  }

  render() {
    return (
      <li className="commentBox">
        <span>
          <span className="commentId">{this.props.userName}</span>
          <span className="commentContent">{this.props.content}</span>
        </span>
        <span>
          <i class="far fa-trash-alt"></i>
          <i
            className={this.state.commentLikeBtn}
            onClick={this.changeColor}
          ></i>
        </span>
      </li>
    );
  }
}

export default Comment;
