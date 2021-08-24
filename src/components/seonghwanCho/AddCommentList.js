import React, { Component } from 'react';

class AddCommentList extends Component {
  render() {
    let COMMENT_DATA = this.props.COMMENT_DATA;

    COMMENT_DATA.map(commentData => {
      return (
        <li className="commentBox">
          <span>
            <span className="commentId">commentData.userName</span>
            <span className="commentContent">commentData.content</span>
          </span>
          <span className="commentLikeBtn"></span>
        </li>
      );
    });
  }
}

export default AddCommentList;
