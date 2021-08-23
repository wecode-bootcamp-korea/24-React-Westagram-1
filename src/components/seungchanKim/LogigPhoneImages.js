import React, { Component } from 'react';
import '../../pages/seungchanKim/Login/login.scss';

class LoginPhoneImages extends React.Component {
  render() {
    const { selectedImage } = this.props;
    let phonePhoto = `/images/seungchanKim/${selectedImage}`;

    return (
      <div className="login_img">
        <div className="random_img">
          <img alt="img1" src={phonePhoto} id="img1" />
          <img alt="img2" src={phonePhoto} id="img2" />
          <img alt="img3" src={phonePhoto} id="img3" />
          <img alt="img4" src={phonePhoto} id="img4" />
          <img alt="img5" src={phonePhoto} id="img5" />
        </div>
      </div>
    );
  }
}

export default LoginPhoneImages;
