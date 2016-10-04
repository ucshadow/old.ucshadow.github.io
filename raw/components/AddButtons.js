import React from 'react';
import {Motion, spring} from 'react-motion';


export default class AddButtons extends React.Component {
  render() {
    return (
      <div className="landing-button-container">
        <a href={this.props.d.url} className="landing-url">
          Visit Site
        </a>
        {
          this.props.d.gitUrl ?
            <a href={this.props.d.gitUrl} className="landing-git"> Visit Repo </a> :
            null
        }
      </div>
    )
  }
}