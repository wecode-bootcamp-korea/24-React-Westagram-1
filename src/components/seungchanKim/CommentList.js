import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    const { commentList, removeComment } = this.props;
    return (
      <>
        {commentList.map(a => {
          return (
            <div className="qa_layout_2" key={a.id}>
              <span className="qa_name">{a.userId}</span>
              <span className="qa_hello">{a.text}</span>
              <div className="qa_remove" onClick={() => removeComment(a.id)}>
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
