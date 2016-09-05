import React from 'react';
import ReactDOM from 'react-dom';
import { pack } from './imports'


export default class Scripts extends React.Component {

  constructor() {
    super();
    this.allTests = allTests();
    this.state = {active: this.allTests[0], all: this.allTests}
  }

  setActive = (a) => {
    this.setState({active: a})
  };

  populateMenu = () => {
    return this.state.all.map((t) => {
      return (
        <div key={Math.random()} className={t.dif} onClick={() => this.setActive(t)}>
          {t.title}
        </div>
      )
    })
  };

  render() {
    return (
      <div id='container'>
        <div id='presentation' className='presentation' style={{color: 'white'}}>
          SCRIPTS
          {
            <button className='presentation-button'
                    onClick={() => this.props.toggle('webApps')}
            > WebApps </button>
          }
          {
            <button className='presentation-button'
                    onClick={() => this.props.toggle('scripts')}
            > Scripts </button>
          }
          {
            <button className='presentation-button'
                    onClick={() => this.props.toggle('welcome')}
            > Home </button>
          }
          .
          {this.state.active.c}
        </div>
        <div className='menu'>
          {this.populateMenu()}
        </div>
      </div>
    )
  }
}

function allTests() {
  return [
    {c: pack.easy1, title: 'What is your name', dif: 'easy'},
    {c: pack.easy2, title: 'Welcome to cipher day!', dif: 'easy'},
    {c: pack.difficult3, title: 'Welcome to cipher day!', dif: 'difficult'},
    {c: pack.difficult11, title: 'The month calendar', dif: 'difficult'},
    {c: pack.difficult47, title: 'String permutations', dif: 'difficult'},
    {c: pack.difficult104, title: 'Color palette from image', dif: 'difficult'}
  ]
}