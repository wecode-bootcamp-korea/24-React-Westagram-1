import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <li className="feeds-comment__reply">
        <div className="user-feeds__profile--img">
          {this.props.profile !== '' ? (
            <img src={this.props.profile} alt="피드사진" />
          ) : (
            ''
          )}
        </div>
        <b className="user-feeds__name--others">{this.props.name}</b>
        <p>{this.props.comment}</p>
        <i className="far fa-heart icon"></i>
      </li>
    );
  }
}

export default Comment;
