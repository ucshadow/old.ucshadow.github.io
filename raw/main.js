import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome';
import WebApps from './components/webApps';
import Scripts from './components/scripts';
import createCards from './scripts/cards';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


class App extends React.Component {

  constructor() {
    super();
    this.state = {navClass: 'nav-embed'}
  }

  handleScroll_ = () => {
    let pos = document.documentElement.scrollTop || document.body.scrollTop;
    if (pos < 100) {
      this.setState({navClass: 'nav-embed'})
    } else {
      this.setState({navClass: 'nav-mobile'})
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll_);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll_, false)
  }

  render() {
    return (
      <div>
        <nav className={this.state.navClass}>
          <Link to="/" className="nav-button"> Home </Link>
          <Link to="/web-apps" className="nav-button"> Web Apps </Link>
          <Link to="/scripts" className="nav-button"> Scripts </Link>
        </nav>
        {this.props.children}
      </div>
    )
  }

}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Welcome } />
      <Route path="/web-apps" component={ WebApps } d={createCards()}/>
      <Route path="/scripts" component={ Scripts }/>
    </Route>
  </Router>
), document.getElementById('mount'));
