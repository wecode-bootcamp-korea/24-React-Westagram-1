import React, { Component } from 'react';
import DogImg from '../../../assets/images/IMG_2625.jpg';
import './Main.scss';

// nav 로고 부분과 콘텐츠 중앙 정렬
// 검색 폼 아이콘 중앙 정렬 미해결
class Main extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          {/* <!-- nav --> */}
          <nav>
            {/* <!-- westagram title --> */}
            <a href="#" id="logo">
              <i className="fab fa-instagram icon"></i>
              <h1>westagram</h1>
            </a>
            {/* <!-- // westagram title --> */}
            {/* <!-- search-form -->  */}
            <form className="search-form">
              <i class="fas fa-search icon"></i>
              <input
                type="text"
                className="search-form__input"
                aria-label="검색"
                placeholder="검색"
              />
            </form>
            {/* <!-- right icons --> */}
            <ul className="right-icons">
              <li>
                <a href="#">
                  <span className="ir_pm">explore</span>
                  <i className="far fa-compass icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ir_pm">heart</span>
                  <i className="far fa-heart icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="ir_pm">profile</span>
                  <i className="far fa-user icon"></i>
                </a>
              </li>
              {/* <!--// right icons --> */}
            </ul>
          </nav>
          {/* <!-- // nav --> */}
          <main>
            {/* <!-- feeds --> */}
            <div className="feeds">
              <article className="user-feeds">
                <div className="user-feeds__profile">
                  <a href="#" className="user-feeds__profile--me">
                    <div className="user-feeds__profile--img">
                      <img src={DogImg} alt="피드사진" />
                    </div>

                    <strong className="user-feeds__profile--name">
                      wecode_bootcamp
                    </strong>
                  </a>
                  <a href="#" className="user-feeds__profile--option">
                    <span className="ir_pm">option plus</span>
                    <i className="fas fa-ellipsis-h icon"></i>
                  </a>
                </div>
                {/* <!-- feeds contentImg--> */}
                <div className="feeds-content__img">
                  <img src={DogImg} alt="피드사진" />
                </div>

                {/* <!-- //feeds contentImg --> */}
                {/* <!-- feeds icons -->*/}
                <div className="feeds__content">
                  <ul className="feeds-icons">
                    <li>
                      <i className="far fa-heart icon"></i>
                      <span className="ir_pm">좋아요</span>
                    </li>
                    <li>
                      <i className="far fa-comment icon"></i>
                      <span className="ir_pm">댓글</span>
                    </li>
                    <li>
                      <i className="fas fa-location-arrow icon"></i>
                      <span className="ir_pm">공유</span>
                    </li>
                    <li>
                      <i className="far fa-bookmark icon"></i>
                      <span className="ir_pm">북마크</span>
                    </li>
                  </ul>

                  <div className="feeds__likes">
                    <div className="user-feeds__profile--img">
                      <img src={DogImg} alt="피드사진" />
                    </div>
                    <p>
                      <b className="user-feeds__name--others">vi2920va</b>님
                      <b> 외 10명</b>이 좋아합니다.
                    </p>
                  </div>
                  {/* <!-- // feeds icons --> */}
                  <div className="feeds-comment">
                    {/* <!--더보기 전 --> */}
                    <p className="feeds-comment__text">
                      <strong>wecode_bootcamp</strong>
                      <em>위코드에서 인스타그램 클론 코딩하는 중</em>
                      <button>더 보기</button>
                    </p>

                    {/* <!-- 더보기 누른 후 댓글 --> */}
                    <ul className="feeds-comment__list">
                      <li className="feeds-comment__reply">
                        <div className="user-feeds__profile--img">
                          <img src={DogImg} alt="피드사진" />
                        </div>
                        <b className="user-feeds__name--others">vi2920va</b>님
                        <p>우와우오언어dd</p>
                      </li>
                      <li className="feeds-comment__reply">
                        <div className="user-feeds__profile--img">
                          <img src={DogImg} alt="피드사진" />
                        </div>
                        <b className="user-feeds__name--others">vi2920va</b>님
                        <p>우와우오언어dd</p>
                      </li>
                      <li className="feeds-comment__reply">
                        <div className="user-feeds__profile--img">
                          <img src={DogImg} alt="피드사진" />
                        </div>
                        <b className="user-feeds__name--others">vi2920va</b>님
                        <p>우와우오언어dd</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <form className="add-comment">
                  <input
                    type="text"
                    id="add-input"
                    placeholder="댓글달기..."
                    aria-label="댓글추가"
                  />
                  <button type="submit" className="add-btn" disabled>
                    게시
                  </button>
                </form>
              </article>
            </div>
            {/* <!-- // feeds --> */}
            {/* <!-- main-right -->  */}
            <div className="main-right">
              {/* <!-- main-right my info --> */}
              <div className="main-right__myProfile">
                <h2 className="main-right__myProfile__Img">
                  <i className="profile-img icon"></i>
                </h2>
                <div className="main-right__myProfile__info">
                  <span className="main-right__myProfile__info--name">
                    wecode_bootcamp
                  </span>
                  <span className="main-right__myProfile__info--place">
                    Wecode | 위코드
                  </span>
                </div>
              </div>
              {/* <!-- main-right my info --> */}
              {/* <!-- main-right friends story -->  */}
              <div className="main-right__story">
                <div className="main-right__story__title">
                  <h2>스토리</h2>
                  <a href="#">모두 보기</a>
                </div>
                <ul className="main-right__story__list">
                  <li>
                    <a href="#">
                      <figure>
                        <img src={DogImg} alt="user vi2920va" />
                        <figcaption>
                          <strong>_yum_s</strong>
                          <span>16분전</span>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a>
                      <figure>
                        <img src={DogImg} alt="user vi2920va" />
                        <figcaption>
                          <strong>_yum_s</strong>
                          <span>16분전</span>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a>
                      <figure>
                        <img src={DogImg} alt="user vi2920va" />
                        <figcaption>
                          <strong>_yum_s</strong>
                          <span>16분전</span>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--//friends story --> */}
              {/* <!-- friend for you -->  */}
              <div className="main-right__forYou">
                <div className="main-right__forYou__title">
                  <h2>회원님을 위한 추천</h2>
                  <a href="#">모두 보기</a>
                </div>
                <ul className="main-right__forYou__list">
                  <li>
                    <a href="#">
                      <figure>
                        <img src={DogImg} alt="musinsa standard" />
                        <figcaption>
                          <strong>musina_standard</strong>
                          <em>_ieqnd_a님 외2명이</em>
                          <span>팔로우</span>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img src={DogImg} alt="yoona" />
                        <figcaption>
                          <strong>yoona_09</strong>
                          <em>_ieqnd_a님 외2명이</em>
                          <span>팔로우</span>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <figure>
                        <img src={DogImg} alt="starbucks korea" />
                        <figcaption>
                          <strong>starbucks_korea</strong>
                          <em>_ieqnd_a님 외2명이</em>
                          <span>팔로우</span>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--//friend for you--> */}
            </div>
            {/* <!-- //main-right --> */}
          </main>
          {/* <!-- // wrapper --> */}
        </div>
      </>
    );
  }
}

export default Main;
