import React from 'react';

export default class Difficult47 extends React.Component {

  constructor() {
    super();
    this.state = {l: ''}
  }

  per = (string, index) => {
    let res = [];
    let n = string.length;
    let a = string.split('');
    permute(a, 0, n - 1);

    function permute(a, l, r) {
      if (l === r) {
        res.push(a.join(''))
      }
      else {
        for (let i = l; i < r + 1; i++) {
          let temp = '';
          temp = a[l];
          a[l] = a[i];
          a[i] = temp;
          permute(a, l + 1, r);
          temp = a[l];
          a[l] = a[i];
          a[i] = temp;
        }
      }
    }

    res.sort();
    this.setState({l: res[index]})
  };

  activate = () => {
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    let n = this.refs.vals.value.split(',')[0];
    let p = this.refs.vals.value.split(',')[1];
    let s = abc.slice(0, n);
    this.per(s, p - 1)
  };

  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-url">
          <a href="https://www.reddit.com/r/dailyprogrammer/comments/t33vo/522012_challenge_47_difficult/"
             target="_blank"> Reddit Link </a>
        </div>
        <div className="challenge-description">
          Define a function f(n,p) that generates the permutation number p in a sorted
          list of all permutations of the n first letters of the alphabet
          <br />
        </div>
        <div className="challenge-output">
          <br />
          <span style={{color: 'pink'}}> Warning </span>: Big numbers will block
          your browser (or active window if Chrome)
          because of poor algorithm implementation and poor execution speed
          of Javascript on the browser side.
          <br />
          Let's say 8, 20000 is a safe bet.
          <br />
          <br />
          <input className="challenge-input" type="text" ref="vals" placeholder="n,p"/>
          <button className="filter-button" onClick={() => this.activate()}
                  style={{float: 'none'}}> Submit
          </button>
          <br />
          <br />
          {this.state.l}
        </div>
      </div>
    )
  }
}