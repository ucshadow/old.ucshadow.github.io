import React from 'react';
import {Motion, spring} from 'react-motion';
import AddLibs from './AddLibs';
import AddButtons from './AddButtons';


export default class SingleCard extends React.Component {

  constructor() {
    super();
    this.state = {overlay: false}
  }

  showOverlay = () => this.setState({overlay: 'on'});
  hideOverlay = () => this.setState({overlay: 'off'});
  showOverlayTouch = () => {
    this.state.overlay === 'on' ?
      this.setState({overlay: 'off'}) :
      this.setState({overlay: 'on'});
  };

  setOverlay = () => {
    if (this.state.overlay === 'on') {
      return (
        <div>
          <Motion defaultStyle={{opacity: 0}} style={{opacity: spring(0.8)}}>
            {
              interpolatingStyle =>
                <div
                  className="card-overlay"
                  style={interpolatingStyle}
                ></div>
            }
          </Motion>
          <div className="libs-container">
            <AddLibs d={this.props.d.libs} />
          </div>
          <div className="landing-buttons-container">
            <AddButtons d={this.props.d} />
          </div>
        </div>
      )
    }
    else if (this.state.overlay === 'off') {
      return (
        <Motion defaultStyle={{opacity: 0.8}} style={{opacity: spring(0)}}>
          {
            interpolatingStyle =>
              <div
                className="card-overlay"
                style={interpolatingStyle}
              ></div>
          }
        </Motion>
      )
    }
  };

  render() {
    return (
      <div
        className="single-card"
        style={this.props.customStyle()}
      >
        <div
          className="card-title"
          style={this.state.overlay === 'on' ?
              {color: 'black'} :
              null}
        >
          {this.props.d.title}
        </div>
        <div
          className="card-picture"
          onMouseEnter={this.showOverlay}
          onMouseLeave={this.hideOverlay}
          onTouchStart={this.showOverlayTouch}
        >
          <img src={this.props.d.picture} className="card-picture image"/>
          {this.setOverlay()}
        </div>
      </div>
    )
  }

}


/*var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

 export default class SingleCard extends React.Component {

 constructor() {
 super();
 this.state = {overlay: false}
 }

 showOverlay = () => this.setState({overlay: true});
 hideOverlay = () => this.setState({overlay: false});
 showOverlayTouch = () => this.state.overlay ? this.setState({overlay: false}) : this.setState({overlay: true});

 setOverlay = () => {
 return (
 <ReactCSSTransitionGroup
 transitionName="libs"
 transitionAppear={true}
 transitionAppearTimeout={500}
 transitionLeaveTimeout={500}
 transitionEnterTimeout={500}
 >
 <CardTitle
 title={this.addLibs()}
 subtitle={this.addButtons()}
 subtitleStyle={{float: "right"}}
 key={Math.random()}
 />
 </ReactCSSTransitionGroup>
 )
 };

 addButtons = () => {
 return (
 <div className="landing-buttons">
 <a href={this.props.d.url} target="_blank">
 <FlatButton label="Visit Site" primary={true}/>
 </a>
 {
 this.props.d.gitUrl ?
 <a href={this.props.d.gitUrl} target="_blank">
 <FlatButton label="Visit Git" secondary={true}/>
 </a>
 : null
 }
 </div>
 )
 };

 addLibs = () => {
 return this.props.d.libs.map((lib) => {
 return <img src={libUrl(lib)} title={lib} className="landingLib" key={Math.random()}/>
 })
 };

 render() {
 return (
 <Card
 style={this.props.customStyle()}
 zDepth={3}
 onMouseEnter={this.showOverlay}
 onMouseLeave={this.hideOverlay}
 onTouchStart={this.showOverlayTouch}
 >
 <CardMedia
 overlay={this.state.overlay ? this.setOverlay() : null}
 overlayContainerStyle={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}
 >
 <img src={this.props.d.picture}/>
 </CardMedia>
 <CardTitle
 title={this.props.d.title}
 style={{textAlign: "center"}}
 titleStyle={{paddingRight: 0}}
 />
 </Card>
 )
 }
 }*/