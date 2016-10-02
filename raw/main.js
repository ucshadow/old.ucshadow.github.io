import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome';
import WebApps from './components/webApps';
import Scripts from './components/scripts';
import createCards from './scripts/cards';

class App extends React.Component {

  constructor() {
    super();

    this.state = {live: 'welcome'};
  }

  toggleLive = (change) => {
    this.setState({live: change})
  };

  render() {
    if (this.state.live === 'welcome') {
      return <Welcome toggle={this.toggleLive} d={createCards()} />
    }
    else if (this.state.live === 'webApps') {
      return <WebApps toggle={this.toggleLive} d={createCards()}/>
    }
    else if (this.state.live === 'scripts') {
      return <Scripts toggle={this.toggleLive} />
    }
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('mount')
);