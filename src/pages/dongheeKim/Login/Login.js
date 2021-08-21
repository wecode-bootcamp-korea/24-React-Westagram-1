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
    this.props.history.push('/main-dong');
  };

  handleIdInput = e => {
    this.setState({ id: e.target.value });
  };

  handlePWInput = e => {
    this.setState({ pw: e.target.value });
  };

  render() {
    return (
      <>
        <div class="LoginDonghee">
          <span className="logo">Westagram</span>
          <form action="" method="get" class="loginBox">
            <input
              type="text"
              className="id loginInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              className="password loginInput"
              placeholder="비밀번호"
              onChange={this.handlePWInput}
            />
            <button
              onClick={this.goToMain}
              className={
                this.state.id.includes('@') && this.state.pw.length > 5
                  ? 'activeBtn'
                  : 'inactiveBtn'
              }
            >
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
