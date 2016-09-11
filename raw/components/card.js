import React from 'react';
import libUrl from '../scripts/libs';

export default class Card extends React.Component {

  addLibs = () => {

    // adds picture for every technology used in building the App

    return this.props.d.libs.map((l) => {
      return (
        <div key={Math.random()} className="single-lib" onClick={() => this.filterLib(l)}>
          <img className="lib-pic" src={libUrl(l)} title={l}/>
        </div>
      )
    })
  };

  filterLib = (tech) => {
    return this.props.filterFunction(tech);
  };

  render() {
    return (
      <div className="card-container">
        <div className="card">
          <img className="card-picture" src={this.props.d.picture}/>
        </div>
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
            <a href={this.props.d.url} target="_blank">
              <button className="card-url"> Visit Site</button>
            </a>
            {this.props.d.gitUrl ?
              <a href={this.props.d.gitUrl} target="_blank">
                <button className="card-git"> Visit Git</button>
              </a>
              : null}
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
