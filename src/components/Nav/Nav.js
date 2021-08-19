import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div id="nav_in_layout">
          <h1 className="title">Westagram</h1>
          <div id="input_design">
            <input id="input_search" type="text" />
            <i className="fas fa-search" id="search_icon"></i>
            <span>검색</span>
          </div>
          <div id="icon_array">
            <a href="#">
              <img
                alt="location_img"
                src="/images/seonghwanCho/location.png"
                className="img_size"
              />
            </a>
            <a href="#">
              <img
                alt="heart_img"
                src="/images/seonghwanCho/heart.png"
                className="img_size"
              />
            </a>
            <a href="#">
              <img
                alt="profile_img"
                src="/images/seonghwanCho/profile.png"
                className="img_size"
              />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
