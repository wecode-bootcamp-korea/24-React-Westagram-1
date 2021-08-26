import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default CommentList;
