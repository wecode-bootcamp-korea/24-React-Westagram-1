import React from 'react';
import LoginPhoneImages from '../../../components/seungchanKim/LogigPhoneImages';
import LoginFooter from '../../../components/seungchanKim/LoginFooter';
import LoginMain from '../../../components/seungchanKim/LoginMain';
import './login.scss';

class Login extends React.Component {
  render() {
    return (
      <>
        <article>
          <LoginPhoneImages />
          <LoginMain />
        </article>
        <LoginFooter />
      </>
    );
  }
}

export default Login;
