import React from 'react';
import libUrl from '../scripts/libs';
import {Motion, spring} from 'react-motion';


export default class AddLibs extends React.Component {

  addLibs = () => {
    let dist = 0;
    return this.props.d.map((lib) => {
      dist += 50;
      return (
        <Motion defaultStyle={{top: 0}} style={{top: spring(dist)}} key={Math.random()}>
          {
            interpolatingStyle =>
              <img
                src={libUrl(lib)}
                title={lib}
                className="landingLib"
                style={interpolatingStyle}
              />
          }
        </Motion>
      )
    })
  };

  render() {
    return (
      <div>
        {this.addLibs()}
      </div>
    )
  }
}
