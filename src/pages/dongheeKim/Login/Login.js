import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class LoginDonghee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: 'Donghee',
      last_name: 'Kim',
      email: '',
      password: '',
      phone_number: '01011111111',
      gender: 'w',
      birth: '1995-12-27',
    };
  }

  handleJoin = () => {
    fetch('http://10.58.7.144:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        first_name: 'Donghee',
        last_name: 'Kim',
        email: this.state.email,
        password: this.state.password,
        phone_number: '010-1111-1111',
        gender: 'w',
        birth: '1995-12-27',
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.MESSAGE === 'SUCCESS') {
          return alert('회원가입 성공!');
        }

        if (response.MESSAGE === 'EMAIL ALREADY EXISTS') {
          alert('이미 존재하는 이메일입니다');
        }
      });
  };

  // handleIdInput = e => {
  //   this.setState({ email: e.target.value });
  // };

  // handlePWInput = e => {
  //   this.setState({ password: e.target.value });
  // };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div class="LoginDonghee">
        <span className="logo">Westagram</span>
        <form class="loginBox">
          <input
            type="text"
            className="id loginInput"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="email"
            onChange={this.handleInput}
          />
          <input
            type="password"
            className="password loginInput"
            placeholder="비밀번호"
            name="password"
            onChange={this.handleInput}
          />
          <button
            type="button"
            onClick={this.handleJoin}
            className={
              this.state.email.includes('@') && this.state.password.length > 5
                ? 'activeBtn'
                : 'inactiveBtn'
            }
          >
            로그인
          </button>
        </form>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    );
  }
}

export default withRouter(LoginDonghee);
