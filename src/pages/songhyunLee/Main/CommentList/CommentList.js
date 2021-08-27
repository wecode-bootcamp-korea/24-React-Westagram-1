import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './CommentList.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/commentData_songhyun.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(comments =>
        this.setState({
          commentList: comments,
        })
      );
  }
  render() {
    const { commentList } = this.state;

    return (
      <ul className="feeds-comment__list">
        {commentList.map(comment => {
          return (
            <Comment
              key={comment.id}
              name={comment.userName}
              profile={comment.profile}
              content={comment.content}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
