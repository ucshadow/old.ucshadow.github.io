import React from 'react';
import Card from './card';

export default class WebApps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active: this.props.d[0], filtered: this.props.d};
  }

  getCorrespondingObject = (title) => {

    // activates the card corresponding to the clicked
    // title in the menu

    for (let i = 0; i < this.props.d.length; i++) {
      if (this.props.d[i].title === title) {
        this.setState({active: this.props.d[i]})
      }
    }
  };

  clearFilter = () => {
    this.setState({filtered: this.props.d})
  };

  menuItemClick = (e) => {
    this.getCorrespondingObject(e)
  };

  fillMenu = () => {

    // populates the menu with Card titles
    // it can be filtered based on the technology used
    // in creating the App corresponding to the Card

    console.log('filling the menu....');

    return this.state.filtered.map((e) => {
      return (
        <div key={Math.random()}
             className='menu-item'
             onClick={() => this.menuItemClick(e.title)}
             style={this.state.active.title === e.title ? {color: "white"} : null}>
          <img className="menu-icon"
               src={"/imgs/" + e.icon}
               style={this.state.active.title === e.title ?
               {WebkitFilter: "brightness(100%)", filter: "brightness(100%)"}
               : null}/>
          {e.title}
        </div>
      )
    })
  };

  filterApps = (tech) => {

    // filters the Apps based on clicked technology
    // and updates state with Apps that use that technology only

    let fil = [];
    this.props.d.forEach(function (e) {
      if (e.libs.indexOf(tech) >= 0) {
        fil.push(e)
      }
    });
    return this.setState({filtered: fil});
  };

  displayCard = () => {

    // displays the card corresponding to the title
    // it passes filterApps function as a prop
    // so individual Cards can mutate the parent state
    // based on their clicked tech
    // we also pass the length of the array containing
    // all Apps minus the length of the filter array
    // for the 'remove filter' button
    // and the clear filter function

    return <Card key={Math.random()} d={this.state.active} filterFunction={this.filterApps}
                 isFiltered={this.props.d.length - this.state.filtered.length} clear={this.clearFilter}/>
  };

  render() {
    return (
      <div id='container'>
        <div id='presentation' className='presentation' style={{color: 'white'}}>
          <div className="navigation">
            <button className='presentation-button'
                    onClick={() => this.props.toggle('webApps')}
            > WebApps
            </button>
            <button className='presentation-button'
                    onClick={() => this.props.toggle('scripts')}
            > Scripts
            </button>
            <button className='presentation-button'
                    onClick={() => this.props.toggle('welcome')}
            > Home
            </button>
          </div>

          {this.displayCard()}
        </div>
        <div className="menu-container">
          <div className='menu'>
            {this.fillMenu()}
          </div>
        </div>
      </div>
    )
  }
}