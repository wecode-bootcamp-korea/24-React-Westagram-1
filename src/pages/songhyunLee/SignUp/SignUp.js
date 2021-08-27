import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="signup-wrapper">
        <div className="signup-container">
          <h2 className="logo">westagram</h2>
          <form className="signUp-form">
            <input
              type="email"
              aria-label="이름 또는 이메일"
              className="signUp-email"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />

            <input
              type="text"
              aria-label="성명"
              className="signUp-input"
              placeholder="성명"
            />
            <input
              type="text"
              aria-label="닉네임"
              className="signUp-input"
              placeholder="사용자 이름"
            />
            <input
              type="password"
              aria-label="비밀번호"
              className="signUp-pwd"
              placeholder="비밀번호"
            />
            <button type="submit" className="signUp-btn">
              가입
            </button>
          </form>
        </div>
        <div className="login">
          계정이 있으신가요 ?<a href="/login-hyun"> 로그인</a>
        </div>
      </div>
    );
  }
}

export default SignUp;
