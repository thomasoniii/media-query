import React, { Component } from 'react';

export default class OtherDesktopScreen extends Component {

  componentDidMount() {
    console.log("OtherDesktopScreen is mounting");
  }

  render() {

    console.log("OtherDesktopScreen is rendering");

    const [width, height] = [document.body.clientWidth, document.body.clientHeight];

    return (
      <div className='desktop'>
        <p>This is a different screen which should render as a desktop view.</p>
        <p>Its dimensions are { width } x { height }</p>
        <p>The background should be YELLOW.</p>
        <p>Rotating the device should ALWAYS remain desktop/yellow.</p>

        { this.props.navbar }
      </div>
    )
  }
}
