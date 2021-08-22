import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      pass: false,
    };
  }

  handleChange(e) {
    if (e.target.value.length > 1 && e.target.value.includes('@')) {
      this.setState({
        email: e.target.value,
      });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div className="login">
        <div className="login-container">
          <h2 className="westagram-logo">westagram </h2>
          <form className="login-form">
            <input
              type="email"
              className="login-input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => this.handleChange(e)}
              aria-label="이메일"
            />
            <input
              type="password"
              className="login-input"
              placeholder="비밀번호"
              autoComplete="off"
              aria-label="비밀번호"
            />
            <button type="submit" className="login-btn">
              로그인
            </button>
          </form>
          <p className="singUp">
            <span>비밀번호 찾기</span> / <a href="/signup">가입하기</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
