import React, { Component } from 'react';
import './Login.scss';

class Signup extends Component {
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

  signfetch = () => {
    fetch('http://10.58.3.80:8000/users/user', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        phone_number: this.state.phone_number,
        address: this.state.address,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'INVALID_PASSWORD') {
          alert('비밀번호에 특수문자,숫자,대문자,소문자를 포함하세요.');
        } else if (response.message === 'EXIST USER') {
          alert('이미 존재하는 아이디 입니다.');
        } else if (response.message === 'INVALID_EMAIL') {
          alert('이메일 형식이 맞지 않습니다.');
        } else if (response.message === 'SUCCESS') {
          alert('회원이 되신것을 축하드립니다!');
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
                  placeholder="이름"
                  className="inputBox"
                  id="inputName"
                  onChange={e => {
                    this.setState({
                      name: e.target.value,
                    });
                  }}
                />
              </div>
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
                  id="inputPW"
                  onChange={e => {
                    this.setState({
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="휴대폰번호"
                  className="inputBox"
                  id="inputPN"
                  onChange={e => {
                    this.setState({
                      phone_number: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="주소"
                  className="inputBox"
                  id="inputAddress"
                  onChange={e => {
                    this.setState({
                      address: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <button onClick={this.signfetch} className="loginBtnActive">
                회원가입
              </button>
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

export default Signup;
