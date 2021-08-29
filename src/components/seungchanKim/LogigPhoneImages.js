import React, { Component } from 'react';
import '../../pages/seungchanKim/Login/login.scss';

class LoginPhoneImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: '1.jpeg',
    };
  }

  interval;

  changeTime = () => {
    const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];
    this.setState(prevState => {
      if (prevState.selectedImage === images[0]) {
        return {
          selectedImage: images[1],
        };
      } else if (prevState.selectedImage === images[1]) {
        return {
          selectedImage: images[2],
        };
      } else if (prevState.selectedImage === images[2]) {
        return {
          selectedImage: images[3],
        };
      } else if (prevState.selectedImage === images[3]) {
        return {
          selectedImage: images[4],
        };
      } else if (prevState.selectedImage === images[4]) {
        return {
          selectedImage: images[0],
        };
      }
    });
  };

  componentDidMount() {
    this.interval = setInterval(this.changeTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { selectedImage } = this.state;
    const phonePhoto = `/images/seungchanKim/${selectedImage}`;

    return (
      <div className="login_img">
        <div className="random_img">
          <img alt="img1" src={phonePhoto} className="img1" />
          <img alt="img2" src={phonePhoto} className="img2" />
          <img alt="img3" src={phonePhoto} className="img3" />
          <img alt="img4" src={phonePhoto} className="img4" />
          <img alt="img5" src={phonePhoto} className="img5" />
        </div>
      </div>
    );
  }
}

export default LoginPhoneImages;
