import React from 'react';
import '../Main/main.scss';
import Nav from '../../../components/Nav/Nav';
import MainCommet from '../../../components/seungchanKim/MainCommet';
import Story from '../../../components/seungchanKim/Story';
import Aside from '../../../components/seungchanKim/Aside';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedArr: [],
      commentList: [],
      commentValue: '',
      like: 'far fa-heart',
      likeCounter: '좋아요 41개',
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/commentData_seungchan.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedArr: data,
        });
      });
  }

  removeComment = id => {
    const filteredComments = this.state.commentList.filter(
      comment => comment.id !== id
    );
    this.setState({ commentList: filteredComments });
  };

  addLikeCount = () => {
    if (this.state.like == 'far fa-heart') {
      this.setState({
        like: 'fas fa-heart',
        likeCounter: '좋아요 42개',
      });
    } else if (this.state.like == 'fas fa-heart') {
      this.setState({
        like: 'far fa-heart',
        likeCounter: '좋아요 41개',
      });
    }
  };

  getInputValue = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  addComment = e => {
    e.preventDefault();
    const { commentList } = this.state;
    const newComment = {
      id: commentList.length + 1,
      userId: 'K_seung_chan',
      text: this.state.commentValue,
    };
    this.setState({
      commentList: [...commentList, newComment],
      commentValue: '',
    });
  };

  render() {
    return (
      <>
        <div>
          <Nav />
        </div>
        <div id="main_background">
          <div id="all">
            <div id="dia"></div>
            <div id="tri">
              <h4 id="current_search">최근 검색 항목</h4>
              <div></div>
            </div>
          </div>
          <main>
            <div id="container_1">
              <Story />
              {this.state.feedArr.map(feed => {
                return (
                  <MainCommet
                    profile={feed.profile}
                    feeds={feed.comment}
                    comments={feed.comments}
                    commentList={this.state.commentList}
                    like={this.state.like}
                    likeCounter={this.state.likeCounter}
                    getInputValue={this.getInputValue}
                    addComment={this.addComment}
                    addLikeCount={this.addLikeCount}
                    removeComment={this.removeComment}
                  />
                );
              })}
            </div>
            <Aside />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
