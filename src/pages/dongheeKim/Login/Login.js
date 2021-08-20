import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.scss';

class LoginDonghee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
  }
  goToMain = () => {
    this.props.history.push('/main');
  };

  handleIdInput = e => {
    this.setState({ id: e.target.value });
  };

  handlePWInput = e => {
    this.setState({ pw: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <div class="LoginDonghee">
          <span class="logo">Westagram</span>
          <form action="" method="get" class="loginBox">
            <input
              type="text"
              class="id loginInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              class="password loginInput"
              placeholder="비밀번호"
              onChange={this.handlePWInput}
            />
            <button onClick={this.goToMain} class="loginBtn">
              로그인
            </button>
          </form>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </>
    );
  }
}

export default withRouter(LoginDonghee);
