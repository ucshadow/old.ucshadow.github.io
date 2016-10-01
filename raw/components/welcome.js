import React from 'react';
import Landing from './Landing';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class Welcome extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>

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
            <Landing />
        </div>
      </MuiThemeProvider>
    )
  }
}