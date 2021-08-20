//공용
import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav_in_layout">
          <h1 className="title">Westagram</h1>
          <div id="input_design">
            <input id="input_search" type="text" placeholder="검색" />
            <i className="fas fa-search" id="search_icon"></i>
          </div>
          <ul className="icon_list">
            <li>
              <a href="#">
                <i className="far fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
