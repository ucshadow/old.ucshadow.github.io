import React from 'react';

export default class Welcome extends React.Component {

  render() {
    return (
      <div id='container'>
        <div id='presentation' className='presentation' style={{color: 'white'}}>
          Hello, I am SHADOW, here you can view my
          {
            <button className='presentation-button'
              onClick={() => this.props.toggle('webApps')}
            > WebApps </button>
          }
          or my
          {
            <button className='presentation-button'
              onClick={() => this.props.toggle('scripts')}
            > Scripts </button>
          }
          .
        </div>
      </div>
    )
  }
}