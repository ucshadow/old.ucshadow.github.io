import React from 'react';

export default class Difficult11 extends React.Component {

  constructor() {
    super();
    this.state = {date: new Date()}
  }

  calculateData = () => {
    let arr = [];
    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth() + 1;
    let day = this.state.date.getDay();
    let daysInMonth = new Date(year, month, 0).getDate();

    while (day < daysInMonth + this.state.date.getDay()) {
      arr.push(day);
      day += 1;
    }
    return arr;
  };

  addLegend = () => {
    return [...Array(7)].map((e, index) => {
      return <div key={Math.random()} style={lStyle()}>
        &nbsp; &nbsp; {new Date(2016, 7, index).toDateString().split(' ')[0]}
      </div>
    })
  };

  dayOfMonth = (i) => {
    let arr = this.calculateData();
    let d = new Date();
    if (
      d.getYear() === this.state.date.getYear() &&
      d.getMonth() === this.state.date.getMonth() &&
      d.getDay() === this.state.date.getDay()
    ) {
      if (arr.indexOf(i + 1) === this.state.date.getDate()) {
        return tStyle();
      }
    }
    return arr.indexOf(i) >= 0 ? dStyle() : eStyle()
  };

  addCalendar = () => {
    let arr = this.calculateData();
    return [...Array(42)].map((s, i) => {
      return (
        <div key={Math.random()} style={this.dayOfMonth(i)}>
          {arr.indexOf(i) >= 0 ? arr.indexOf(i) + 1 : null}
        </div>)
    })
  };

  changeYear = (y) => {
    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth();
    let day = this.state.date.getDate();
    if (y) {
      return this.setState({date: new Date(year + 1, month, day)})
    }
    return this.setState({date: new Date(year - 1, month, day)})
  };

  changeMonth = (y) => {
    let year = this.state.date.getFullYear();
    let month = this.state.date.getMonth();
    let day = this.state.date.getDate();
    if (y) {
      return this.setState({date: new Date(year, month + 1, day)})
    }
    return this.setState({date: new Date(year, month - 1, day)})
  };

  manualDate = () => {
    let year = this.refs.year.value;
    let month = this.refs.month.value;
    if(year >= 1901 && year <= 2100) {
      if(month >= 1 && month <= 12) {
        return this.setState({date: new Date(year, month - 1, 1)})
      }
    }
    document.getElementById('alerts').innerHTML =
      'Please enter the month as a number from 1 to 12 and year as a number from 1901 to 2100';
    setTimeout(function() {
      return document.getElementById('alerts').innerHTML = ''
    }, 4000)
  };


  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-url">
          <a href="https://www.reddit.com/r/dailyprogrammer/comments/pwpdz/2192012_challenge_11_difficult"
             target="_blank"> Reddit Link </a>
        </div>
        <div className="challenge-description">
          Create a program which prints out a table with the month's calendar in it, when the month and year is given as
          input.
          <br />
          Extra points for highlighting the current day and providing links to next and previous months.
        </div>
        <div className="challenge-output">
          <div style={cStyle()}>
            <div>
              {this.addLegend()}
            </div>
            {this.addCalendar()}
          </div>
          <div style={{float: 'left', marginTop: '2em'}}>
            add new date &nbsp;
            <input className="challenge-input" type="text" ref="year" placeholder="year"/>
            &nbsp;
            <input className="challenge-input" type="text" ref="month" placeholder="month"/>
            <button className="filter-button" onClick={() => this.manualDate()}> Submit</button>
          </div>
        </div>

        <div style={{float: 'left', marginLeft: '1em'}}>
          <button className="filter-button" onClick={() => this.changeMonth(true)}> +</button>
          &nbsp;Month&nbsp;
          <button className="filter-button" onClick={() => this.changeMonth(false)}> -</button>
        </div>
        <div style={{float: 'left', marginLeft: '1em'}}>
          <button className="filter-button" onClick={() => this.changeYear(true)}> +</button>
          &nbsp;Year&nbsp;
          <button className="filter-button" onClick={() => this.changeYear(false)}> -</button>
        </div>
        <div style={{float: 'left', margin: '1em 0 0 4em'}}>
          {this.state.date.getFullYear()} - {monthNames()[this.state.date.getMonth()]}
        </div>
        <div id="alerts" className="alerts">
        </div>
      </div>
    )
  }

};


function dStyle() {
  return {
    height: '4em',
    width: '4em',
    background: 'green',
    outline: '2px solid white',
    float: 'left'
  }
}

function tStyle() {
  return {
    height: '4em',
    width: '4em',
    background: 'pink',
    outline: '2px solid white',
    float: 'left'
  }
}

function eStyle() {
  return {
    height: '4em',
    width: '4em',
    background: 'none',
    outline: '2px solid white',
    float: 'left'
  }
}

function cStyle() {
  return {
    width: '28em',
    color: 'white'
  }
}

function lStyle() {
  return {
    height: '4em',
    width: '4em',
    background: 'none',
    float: 'left',
    marginBottom: '1em'
  }
}

function days() {
  return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
}

function monthNames() {
  return ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
}

