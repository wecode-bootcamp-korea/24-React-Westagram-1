import React from 'react';
import StoryComponent from './StoryComponent';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storyList: [
        {
          id: 1,
          text: 'seung_chan',
        },
        {
          id: 2,
          text: 'seung_chan',
        },
        {
          id: 3,
          text: 'seung_chan',
        },
        {
          id: 4,
          text: 'seung_chan',
        },
        {
          id: 5,
          text: 'seung_chan',
        },
        {
          id: 6,
          text: 'seung_chan',
        },
        {
          id: 7,
          text: 'seung_chan',
        },
        {
          id: 8,
          text: 'seung_chan',
        },
      ],
    };
  }

  render() {
    return (
      <div className="story">
        <ul>
          {this.state.storyList.map(story => {
            return <StoryComponent key={story.id} storytext={story.text} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Story;
