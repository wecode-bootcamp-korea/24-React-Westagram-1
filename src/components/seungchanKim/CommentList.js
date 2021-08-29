import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    const { commentList, removeComment } = this.props;
    return (
      <>
        {commentList.map(({ id, userId, text }) => {
          return (
            <div className="qa_layout_2" key={id}>
              <span className="qa_name">{userId}</span>
              <span className="qa_hello">{text}</span>
              <div className="qa_remove" onClick={() => removeComment(id)}>
                X
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default CommentList;
