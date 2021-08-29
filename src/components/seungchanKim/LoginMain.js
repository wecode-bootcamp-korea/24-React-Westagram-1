import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/seungchanKim/Login/login.scss';

class LoginMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      buttonValue: true,
      isTypeValue: true,
      idFontSizeValue: true,
      pwFontSizeValue: true,
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

  pwLookClick = () => {
    if (this.state.isTypeValue === true) {
      this.setState({
        isTypeValue: false,
      });
    } else if (this.state.isTypeValue === false) {
      this.setState({
        isTypeValue: true,
      });
    }
  };

  idFontSize = () => {
    const idLength = this.state.id.length > 0;
    if (idLength > 0) {
      this.setState({
        idFontSizeValue: false,
      });
    } else {
      this.setState({
        idFontSizeValue: true,
      });
    }
  };

  pwFontSize = () => {
    const pwLength = this.state.pw.length > 0;
    if (pwLength) {
      this.setState({
        pwFontSizeValue: false,
      });
    } else {
      this.setState({
        pwFontSizeValue: true,
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
        buttonValue: false,
      });
    } else {
      this.setState({
        buttonValue: true,
      });
    }
  };

  render() {
    const {
      id,
      pw,
      buttonValue,
      isTypeValue,
      idFontSizeValue,
      pwFontSizeValue,
    } = this.state;
    return (
      <div className="login_main">
        <div className="all_layout">
          <h1 className="title">Westagram</h1>
          <div className="login_input">
            <div id="customer_id" className="login_box_layout">
              <label for="cs_id">
                <input
                  type="text"
                  className="cs_id"
                  value={id}
                  onChange={this.handleIdInput}
                  onKeyUp={this.idFontSize}
                />
                <span
                  className={
                    idFontSizeValue ? 'callNumber' : 'callNumberChange'
                  }
                >
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
                  type={isTypeValue ? 'password' : 'text'}
                  className="cs_pw"
                  value={pw}
                  onChange={this.handlePwInput}
                  onKeyUp={this.pwFontSize}
                />
                <span
                  className={
                    pwFontSizeValue ? 'placeHoldPw' : 'placeHoldPwChange'
                  }
                >
                  비밀번호
                </span>
              </label>
              <div
                className={pwFontSizeValue ? 'pwLook' : 'pwLookChange'}
                onClick={this.pwLookClick}
              >
                {isTypeValue ? '비밀번호 표시' : '숨기기'}
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
                  className={buttonValue ? 'buttonEvent' : 'buttonEventChange'}
                  onClick={this.handleLogin}
                />
              </Link>
            </div>
            <div id="login_or" className="login_box_layout">
              <div className="or_line"></div>
              <div className="or_text">또는</div>
              <div className="or_line"></div>
            </div>
            <div id="login_facebook" className="login_box_layout">
              <i className="fab fa-facebook-square"></i>
              <a href="#">Facebook으로 로그인</a>
            </div>
            <div className="pw_forgot">
              <a href="#">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
        <div className="no_id">
          <span>계정이 없으신가요?</span>
          <a href="#">가입하기</a>
        </div>
      </div>
    );
  }
}

export default LoginMain;
