import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../pages/seungchanKim/Login/login.scss';

class LoginMain extends React.Component {
  render() {
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
                  value={this.props.idValue}
                  onChange={this.props.handleIdInput}
                  onKeyUp={this.props.fontSize}
                />
                <span className={this.props.idFontSize}>
                  전화번호, 사용자 이름 또는 이메일
                </span>
              </label>
            </div>
            <div
              id="customer_pw"
              className="login_box_layout"
              onKeyUp={this.props.loginKey}
            >
              <label for="cs_pw">
                <input
                  type={this.props.type}
                  id="cs_pw"
                  value={this.props.pwValue}
                  onChange={this.props.handlePwInput}
                  onKeyUp={this.props.pwPlaceHold}
                />
                <span className={this.props.pwFontSize}>비밀번호</span>
              </label>
              <div className={this.props.pwLook} onClick={this.props.pwClick}>
                {this.props.typeInfo}
              </div>
            </div>
            <div
              id="login_button"
              className="login_box_layout"
              onKeyUp={this.props.loginKey}
            >
              <Link to="/main-chan">
                <input
                  type="button"
                  value="로그인"
                  className={this.props.buttonChange}
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
