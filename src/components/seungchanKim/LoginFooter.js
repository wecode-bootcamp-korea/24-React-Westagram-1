import React, { Component } from 'react';
import '../../pages/seungchanKim/Login/login.scss';

class LoginFooter extends React.Component {
  render() {
    return (
      <div className="info">
        <ul>
          <li>
            <a href="#">소개</a>
          </li>
          <li>
            <a href="#">블로그</a>
          </li>
          <li>
            <a href="#">채용 정보</a>
          </li>
          <li>
            <a href="#">도움말</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">약간</a>
          </li>
          <li>
            <a href="#">인기 계장</a>
          </li>
          <li>
            <a href="#">해시태그</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">뷰티</a>
          </li>
          <li>
            <a href="#">댄스</a>
          </li>
          <li>
            <a href="#">피트니스</a>
          </li>
          <li>
            <a href="#">식음료</a>
          </li>
          <li>
            <a href="#">집 및 정원</a>
          </li>
          <li>
            <a href="#">음악</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LoginFooter;
