import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      // <li key={this.props.idx}>
      <li>
        <span>
          <span className="accountName">{this.props.comment.accountName}</span>
          <span>{this.props.comment.commentInput}</span>
        </span>
        <div>
          <span class="heart">
            <i class="far fa-heart"></i>
          </span>
          <span class="delete">
            <i class="far fa-trash-alt"></i>
          </span>
        </div>
      </li>
      // <li key={this.props.idx}>
      //   <span>
      //     <span class="accountName">donghee</span>
      //     {this.props.commentInput}
      //   </span>
      //   <div>
      //     <span class="heart">
      //       <i class="far fa-heart"></i>
      //     </span>
      //     <span class="delete">
      //       <i class="far fa-trash-alt"></i>
      //     </span>
      //   </div>
      // </li>
    );
  }
}

export default Comment;
