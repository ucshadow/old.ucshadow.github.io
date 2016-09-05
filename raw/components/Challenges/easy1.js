import React from 'react';

export default class Easy1 extends React.Component {

  constructor() {
    super();
    this.state = {d: ''}
  }

  click_ = () => {
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let user = this.refs.username.value;

    if(age % 1 !== 0) {
      this.setState({d: 'your age must be a number'})
    } else {
      //this.setState({d: 'your name is ${name}, you are ${age} years old, and your username is ${user}'})
      this.setState({
        d: 'your name is ' + name +
        ', you are ' + age + ' years old, and your username is ' + user
      })
    }
  };

  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-url">
          <a href={link()} target="_blank"> Reddit Link </a>
        </div>
        <div className="challenge-description">
          create a program that will ask the users name, age, and reddit username.
          have it tell them the information back, in the format:
          <br />
          your name is (blank), you are (blank) years old, and your username is (blank)
        </div>
        <input ref="name" type="text" className="challenge-input" placeholder="name" />
        <input ref="age" type="text" className="challenge-input" placeholder="age" />
        <input ref="username" type="text" className="challenge-input" placeholder="reddit username" />
        <button className="challenge-submit" onClick={this.click_}> Submit </button>
        <div className="challenge-output"> {this.state.d} </div>
      </div>
    )
  }
}

function link() {
  return "https://www.reddit.com/r/dailyprogrammer/comments/pih8x/easy_challenge_1/";
}