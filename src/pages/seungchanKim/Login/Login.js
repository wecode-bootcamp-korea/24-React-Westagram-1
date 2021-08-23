import React from 'react';
import './login.scss';
import LoginPhoneImages from '../../../components/seungchanKim/LogigPhoneImages';
import LoginFooter from '../../../components/seungchanKim/LoginFooter';
import LoginMain from '../../../components/seungchanKim/LoginMain';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'],
      selectedImage: '1.jpeg',
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

  pwfontSize = () => {
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

  changeTime = () => {
    this.setState(prevState => {
      if (prevState.selectedImage === this.state.images[0]) {
        return {
          selectedImage: this.state.images[1],
        };
      } else if (prevState.selectedImage === this.state.images[1]) {
        return {
          selectedImage: this.state.images[2],
        };
      } else if (prevState.selectedImage === this.state.images[2]) {
        return {
          selectedImage: this.state.images[3],
        };
      } else if (prevState.selectedImage === this.state.images[3]) {
        return {
          selectedImage: this.state.images[4],
        };
      } else if (prevState.selectedImage === this.state.images[4]) {
        return {
          selectedImage: this.state.images[0],
        };
      }
    });
  };

  componentDidMount() {
    setInterval(this.changeTime, 1000);
  }

  render() {
    return (
      <>
        <article>
          <LoginPhoneImages selectedImage={this.state.selectedImage} />
          <LoginMain
            idValue={this.state.id}
            pwValue={this.state.pw}
            buttonChange={this.state.buttonChange}
            idFontSize={this.state.idFontSize}
            pwFontSize={this.state.pwFontSize}
            pwLook={this.state.pwLook}
            type={this.state.type}
            typeInfo={this.state.typeInfo}
            fontSize={this.fontSize}
            handleIdInput={this.handleIdInput}
            handlePwInput={this.handlePwInput}
            loginKey={this.loginKey}
            pwPlaceHold={this.pwfontSize}
            pwClick={this.pwClick}
          />
        </article>
        <LoginFooter />
      </>
    );
  }
}

export default Login;
