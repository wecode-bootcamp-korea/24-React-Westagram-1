import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/seungchanKim/Login/login.scss';

class LoginMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      buttonChange: 'buttonEvent',
      idFontSize: 'callNumber',
      pwFontSize: 'placeHoldPw',
      pwLook: 'pwLook',
      type: 'password',
      typeInfo: '비밀번호 표시',
    };
  }

  handleLogin = () => {
    fetch('http://10.58.0.98:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert(`Welcome ${this.state.id}`);
          this.props.history.push('/main-chan');
        } else {
          alert('Login failed');
        }
      })
      .catch(err => alert(err));
  };

  pwClick = () => {
    if (this.state.typeInfo === '비밀번호 표시') {
      this.setState({
        typeInfo: '숨기기',
        type: 'text',
      });
    } else if (this.state.typeInfo === '숨기기') {
      this.setState({
        typeInfo: '비밀번호 표시',
        type: 'password',
      });
    }
  };

  fontSize = () => {
    if (this.state.id.length > 0) {
      this.setState({
        idFontSize: 'callNumberChange',
      });
    } else {
      this.setState({
        idFontSize: 'callNumber',
      });
    }
  };

  pwFontSize = () => {
    if (this.state.pw.length > 0) {
      this.setState({
        pwFontSize: 'placeHoldPwChange',
        pwLook: 'pwLookChange',
      });
    } else {
      this.setState({
        pwFontSize: 'placeHoldPw',
        pwLook: 'pwLook',
      });
    }
  };

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  loginKey = () => {
    if (
      this.state.id.length > 5 &&
      this.state.id.includes('@') &&
      this.state.pw.length > 5
    ) {
      this.setState({
        buttonChange: 'buttonEventChange',
      });
    } else {
      this.setState({
        buttonChange: 'buttonEvent',
      });
    }
  };

  render() {
    const {
      id,
      pw,
      buttonChange,
      idFontSize,
      pwFontSize,
      pwLook,
      type,
      typeInfo,
    } = this.state;
    return (
      <div className="login_main">
        <div id="all_layout">
          <h1 id="title">Westagram</h1>
          <div id="login_input">
            <div id="customer_id" className="login_box_layout">
              <label for="cs_id">
                <input
                  type="text"
                  id="cs_id"
                  value={id}
                  onChange={this.handleIdInput}
                  onKeyUp={this.fontSize}
                />
                <span className={this.state.idFontSize}>
                  전화번호, 사용자 이름 또는 이메일
                </span>
              </label>
            </div>
            <div
              id="customer_pw"
              className="login_box_layout"
              onKeyUp={this.loginKey}
            >
              <label for="cs_pw">
                <input
                  type={type}
                  id="cs_pw"
                  value={pw}
                  onChange={this.handlePwInput}
                  onKeyUp={this.pwFontSize}
                />
                <span className={pwFontSize}>비밀번호</span>
              </label>
              <div className={pwLook} onClick={this.pwClick}>
                {typeInfo}
              </div>
            </div>
            <div
              id="login_button"
              className="login_box_layout"
              onKeyUp={this.loginKey}
            >
              <Link>
                <input
                  type="button"
                  value="로그인"
                  className={buttonChange}
                  onClick={this.handleLogin}
                />
              </Link>
            </div>
            <div id="login_or" className="login_box_layout">
              <div className="or_line"></div>
              <div id="or_text">또는</div>
              <div className="or_line"></div>
            </div>
            <div id="login_facebook" className="login_box_layout">
              <i className="fab fa-facebook-square"></i>
              <a href="#">Facebook으로 로그인</a>
            </div>
            <div id="pw_forgot">
              <a href="#">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
        <div id="no_id">
          <span>계정이 없으신가요?</span>
          <a href="#">가입하기</a>
        </div>
      </div>
    );
  }
}

export default LoginMain;
