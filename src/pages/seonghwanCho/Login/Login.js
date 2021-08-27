import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      phone: '',
      nickname: '',
      loginBtnClass: 'loginBtn',
    };
  }

  loginfetch = () => {
    fetch('http://10.58.3.80:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'INVALID_USER') {
          alert('아이디 또는 비밀번호가 맞지 않습니다.');
        } else if (response.message === 'SUCCESS') {
          this.props.history.push('/main-seong/');
        }
        console.log(response);
      });
  };

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
                  placeholder="이메일"
                  className="inputBox"
                  id="inputEmail"
                  onChange={e => {
                    this.setState({
                      email: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="inputBox"
                  id="inputEmail"
                  onChange={e => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <button
                className={
                  this.state.email.includes('@') &&
                  this.state.password.length >= 5
                    ? 'loginBtnActive'
                    : 'loginBtn'
                }
                disabled={
                  this.state.email.includes('@') &&
                  this.state.password.length >= 5
                    ? false
                    : true
                }
                onClick={this.loginfetch}
              >
                로그인
              </button>
            </div>
          </article>
          <footer>
            <div>
              <Link to="/signup-seong">가입하기</Link>
            </div>
            <div>
              <a href="#">비밀번호를 잊으셨나요?</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
