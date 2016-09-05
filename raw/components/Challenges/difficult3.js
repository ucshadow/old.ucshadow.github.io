import React from 'react';
import getWords from './words'

export default class Difficult3 extends React.Component {

  constructor() {
    super();
    this.data = getWords();
  }

  solve = () => {
    let input = ['mkeart', 'sleewa', 'edcudls', 'iragoge', 'usrlsle', 'nalraoci', 'nsdeuto', 'amrhat', 'inknsy', 'iferkna'];
    let inputSorted = [];
    let wordListSorted = [];
    let output = [];
    let wordList = this.data;
    input.forEach(function (e) {
      let sorted = e.split('').sort();
      inputSorted.push(sorted);
    });

    wordList.forEach(function (e) {
      let sorted = e.split('').sort();
      wordListSorted.push(sorted);
    });

    inputSorted.forEach(function (input) {
      wordListSorted.forEach(function (word, index) {
        if (input.join('') === word.join('')) {
          output.push(wordList[index])
        }
      })
    });
    return (
      <di className="challenge-container">
        <div className="challenge-url">
          <a href="https://www.reddit.com/r/dailyprogrammer/comments/pkwgf/2112012_challenge_3_difficult/"
             target="_blank"> Reddit Link </a>
        </div>
        <div className="challenge-description">
          For this challenge, you need to write a program that will take the scrambled words from this post,
          and compare them against
          <a href="http://pastebin.com/jSD873gL"> THIS WORD LIST </a>
          to unscramble them.
          <br />
        </div>
        <div className="challenge-output">
          {output.map((e, index) => {
            return <p key={Math.random()}> {input[index]} --> {e} </p>
          })}
        </div>
      </di>
    )
  };

  render() {
    return (
      <div>
        {this.solve()}
      </div>
    )
  }

}
