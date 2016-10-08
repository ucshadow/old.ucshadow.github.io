import React from 'react';
import allLibs from '../scripts/allLibs';
import PowerBar from './PowerBar';
import {Motion, spring} from 'react-motion';


export default class AboutMe extends React.Component {

  constructor() {
    super();
    this.state = {libs: allLibs(), power: 0}
  }

  addLibs = () => {
    return this.state.libs.map((l) => {
      return <PowerBar key={Math.random()} d={l} />
    })
  };

  changePowerLevel = (power) => {
    this.setState({power: power})
  };

  render() {
    return (
      <div className="about-me">
        <div className="about-tech-container">
          { /*<div className="power-bar-container">
            <Motion defaultStyle={{width: 0}} style={{width: spring(this.state.power)}}>
              {
                interpolatingStyle =>
                  <div
                    className="power-bar"
                    style={interpolatingStyle}
                  ></div>
              }
            </Motion>
          </div> */}
          <div className="about-img-container">
            {this.addLibs()}
          </div>
        </div>
      </div>
    )
  }
}