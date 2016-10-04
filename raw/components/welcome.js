import React from 'react';
import Landing from './Landing';
import AboutMe from './AboutMe';
import createCards from '../scripts/cards';

export default class Welcome extends React.Component {

  render() {
    return (
      <div>

        <div id='presentation' className='presentation' style={{color: 'white'}}>
          <AboutMe />
          <Landing d={createCards()}/>
        </div>
      </div>
    )
  }
}