import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { profile, name, content } = this.props;
    return (
      <li className="feeds-comment__reply">
        <div className="user-feeds__profile--img">
          <img src={profile} alt="피드사진" />
        </div>
        <b className="user-feeds__name--others">{name}</b>
        <p>{content}</p>
        <i className="far fa-heart icon"></i>
      </li>
    );
  }
}

export default Comment;
