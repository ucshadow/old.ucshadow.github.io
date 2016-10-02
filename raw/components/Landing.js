import React from 'react';
import SingleCard from './SingleCard';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class Landing extends React.Component {

  constructor() {
    super();
    // set state to client screen width
    this.state = {w: document.documentElement.clientWidth}
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    // change state on window resize
    //console.log(window.innerWidth);
    console.log(document.documentElement.clientWidth);
    this.setState({w: document.documentElement.clientWidth});
  };

  handleScreenSize = () => {
    // return style for different sizes
    let w = this.state.w;

    if (w < 600) {
      return {
        width: w - (w / 100)
      }
    }
    return {
      width: (w - 300) / 3,
      float: 'left',
      marginLeft: 50,
      marginTop: 50
    }
  };

  allProjects = () => {
    let sorted = this.props.d.sort((a, b) => {
      return a.pos - b.pos
    });
    return sorted.map((e) => {
      return <SingleCard key={Math.random()} customStyle={this.handleScreenSize} d={e} />
    })
  };

  render() {
    return (
      <div className="card-holder" id="card-container">
        {this.allProjects()}
      </div>
    )
  }
}