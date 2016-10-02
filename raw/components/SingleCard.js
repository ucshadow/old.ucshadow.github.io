import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import libUrl from '../scripts/libs';

export default class SingleCard extends React.Component {

  constructor() {
    super();
    this.state = {overlay: false}
  }

  showOverlay = () => this.setState({overlay: true});
  hideOverlay = () => this.setState({overlay: false});

  setOverlay = () => {
    return <CardTitle
      title={this.addLibs()}
      subtitle={this.addButtons()}
      subtitleStyle={{float: "right"}}
      key={Math.random()}
    />
  };

  addButtons = () => {
    return (
      <div className="landing-buttons">
        <a href={this.props.d.url} target="_blank" >
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
        onTouchStart={this.showOverlay}
        onTouchEnd={this.hideOverlay}
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
}