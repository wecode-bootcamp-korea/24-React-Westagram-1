import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputId: '',
      inputPw: '',
    };
  }
  render() {
    return (
      <div className="Login">
        <div className="contentBox">
          <header>westagram</header>
          <article>
            <div className="input">
              <div>
                <input
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  className="inputBox"
                  id="inputEmail"
                  onChange={e => {
                    this.setState({
                      inputId: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="inputBox"
                  id="inputPw"
                  onChange={e => {
                    this.setState({
                      inputPw: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <Link to="/main-seong">
                <button className="loginBtn">로그인</button>
              </Link>
            </div>
          </article>
          <footer>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Login;
