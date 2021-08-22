import React, { Component } from 'react';
import './Login.scss';

// Mission-1 Login 사용자 입력 데이터 저장
// - ID <input에서> onChange event를 발생
// - event 발생시 handleInput 함수를 실행
// - event.target.value를 state에 저장
// - 위의 과정을 PW <input>에도 동일하게 적용.
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: '',
      PW: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    console.log(this.state['ID']);
    return (
      <div className="login">
        <div className="login-container">
          <h2 className="westagram-logo">westagram </h2>
          <form className="login-form">
            <input
              type="email"
              name="ID"
              className="login-input"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
              aria-label="이메일"
            />
            <input
              type="password"
              name="PW"
              className="login-input"
              placeholder="비밀번호"
              autoComplete="off"
              aria-label="비밀번호"
              onChange={this.handleInput}
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
