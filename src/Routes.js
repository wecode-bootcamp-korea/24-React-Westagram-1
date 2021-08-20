import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginDonghee from './pages/dongheeKim/Login/Login';
import MainDonghee from './pages/dongheeKim/Main/Main';
import LoginSeonghwan from './pages/seonghwanCho/Login/Login';
import MainSeonghwan from './pages/seonghwanCho/Main/Main';
import LoginSeungchan from './pages/seungchanKim/Login/Login';
import MainSeungchan from './pages/seungchanKim/Main/Main';
import LoginSonghyun from './pages/songhyunLee/Login/Login';
import MainSonghyun from './pages/songhyunLee/Main/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-dong" component={LoginDonghee} />
          <Route exact path="/main-dong" component={MainDonghee} />
          <Route exact path="/login-seong" component={LoginSeonghwan} />
          <Route exact path="/main-seong" component={MainSeonghwan} />
          <Route exact path="/login-chan" component={LoginSeungchan} />
          <Route exact path="/main-chan" component={MainSeungchan} />
          <Route exact path="/login-hyun" component={LoginSonghyun} />
          <Route exact path="/main-hyun" component={MainSonghyun} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
