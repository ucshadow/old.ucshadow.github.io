import React from 'react';
import libUrl from '../scripts/libs';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  addLibs = () => {

    // adds picture for every technology used in building the App

    return this.props.d.libs.map((l) => {
      return (
        <div key={Math.random()} className="single-lib" onClick={() => this.filterLib(l)}>
          <img className="lib-pic" src={libUrl(l)}/>
        </div>
      )
    })
  };

  filterLib = (tech) => {
    return this.props.filterFunction(tech);
  };

  render() {
    return (
      <div className="card">
        <img className="card-picture" src={this.props.d.picture}/>
        <div className="card-libs">
          {this.addLibs()}
        </div>
        <div className="card-description">
          {this.props.d.description}
          <div className="buttons-container">
            {
              this.props.isFiltered ? <button className="card-git" onClick={this.props.clear}>
                Clear Filter </button> :
                null
            }
            <button className="card-url"> Visit Site</button>
            <button className="card-git"> Visit Git</button>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  filterFunction: React.PropTypes.func,
  isFiltered: React.PropTypes.number,
  clear: React.PropTypes.func
};
