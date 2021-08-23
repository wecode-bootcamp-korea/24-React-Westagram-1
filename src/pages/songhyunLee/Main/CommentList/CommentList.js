import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './CommentList.scss';

// 생성(Mount): 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입 될 때
class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: '',
    };
    console.log('%c 생성-생성자', 'color: green');
  }
  componentDidMount() {
    // 컴포넌트가 만들어지고 첫 렌더링을 다 마친후 실행
    console.log('%c 생성-첫 렌더링 끝 ', 'color: green');
    // Fetch API: HTTP 요청(request), 응답(response)
    // syntax fetch(url, [options])
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
    console.log(this.state.commentList);
    console.log('%c 생성-그릴때', 'color: green');
    const { commentList, commentValue } = this.state;

    return (
      <>
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
      </>
    );
  }
}

export default CommentList;
