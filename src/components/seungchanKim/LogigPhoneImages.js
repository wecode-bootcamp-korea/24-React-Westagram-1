import React, { Component } from 'react';
import '../../pages/seungchanKim/Login/login.scss';

class LoginPhoneImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'],
      selectedImage: '1.jpeg',
    };
  }

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
    const { selectedImage } = this.state;
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
