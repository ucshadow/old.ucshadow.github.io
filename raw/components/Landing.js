import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default class Landing extends React.Component {

  constructor() {
    super();
    // set state to client screen width
    this.state = {w: document.documentElement.clientWidth}
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    // change state on window resize
    //console.log(window.innerWidth);
    console.log(document.documentElement.clientWidth);
    this.setState({w: document.documentElement.clientWidth});
  };

  handleScreenSize = () => {
    // return style for different sizes
    let w = this.state.w;

    if (w < 600) {
      return {
        width: w - (w / 100)
      }
    }
    return {
      width: (w - 100) / 3
    }
  };

  render() {
    return (
      <div className="card-holder" id="card-container">
        <Card
          style={this.handleScreenSize()}
        >
          <CardHeader
            title="URL Avatar"
            subtitle="Subtitle"
            avatar="https://s-media-cache-ak0.pinimg.com/236x/eb/5f/e2/eb5fe2264d37930466e6b40c13e80442.jpg"
          />
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
          >
            <img src="http://www.girlsdaydaily.com/wp-content/uploads/2016/05/Minah-.png"/>
          </CardMedia>
          <CardTitle title="Card title" subtitle="Card subtitle"/>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          </CardText>
          <CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </CardActions>
        </Card>
      </div>
    )
  }
}