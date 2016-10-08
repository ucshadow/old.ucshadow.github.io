import React from 'react';

export default class PowerBar extends React.Component {

  showPowerLevel = () => {
    this.props.c(this.props.d.lvl)
  };

  hidePowerLevel = () => {
    this.props.c(0)
  };

  render() {
    return (
      <div key={Math.random()} className="about-single-tech">
        <img
          className="single-tech"
          key={Math.random()}
          src={this.props.d.url}
        />
        <span className="single-tech-name"> {this.props.d.name} </span>
      </div>
    )
  }
}