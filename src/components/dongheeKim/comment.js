import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <li>
        <span>
          <span className="accountName">{this.props.comment.accountName}</span>
          <span>{this.props.comment.comment}</span>
        </span>
        <div>
          <span className="heart">
            <i className="far fa-heart"></i>
          </span>
          <i
            onClick={() => {
              this.props.deleteComment(this.props.comment);
            }}
            className="delete"
          >
            <i className="far fa-trash-alt"></i>
          </i>
        </div>
      </li>
    );
  }
}

export default Comment;
