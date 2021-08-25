import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './CommentList.scss';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3002/data/commentData_songhyun.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          commentList: data,
        })
      );
  }
  render() {
    const { commentList, commentValue } = this.state;

    return (
        <ul className="feeds-comment__list">
          {commentList.map(comment => {
            return (
              <Comment
                key={comment.id}
                name={comment.userName}
                profile={comment.profile}
                comment={comment.content}
              />
            );
          })}
        </ul>
    );
  }
}

export default CommentList;
