import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    breakpoint : 470
  }

  constructor(props) {
    super(props);

    this.windowResize = this.windowResize.bind(this);
  }

  windowResize() {
    if (this.lastWidth !== window.innerWidth || this.lastHeight !== window.innerHeight) {
      this.determineIsMobile();
    }
    this.lastWidth  = window.innerWidth;
    this.lastHeight = window.innerHeight;
  }

  determineIsMobile() {

    let meta = document.querySelector('meta[name="viewport"]');
    meta.setAttribute('content', 'width=device-width');

    if ( window.innerWidth < this.state.breakpoint ) {
      this.setState( { isMobile : true } );
    }
    else {
      this.setState( { isMobile : false } );
      meta.setAttribute('content', '');
    }

    this.setState({width : window.innerWidth, height : window.innerHeight});

  }

  componentDidMount() {
    this.determineIsMobile();
    window.addEventListener('resize', this.windowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
    let meta = document.querySelector('meta[name="viewport"]');
    meta.setAttribute('content', '');
  }

  render() {
    return (
      <div className={this.state.isMobile ? 'App mobile' : 'App desktop'}>
        <p>{this.state.width} x { this.state.height }</p>
        <p>This is a { this.state.isMobile ? "MOBILE" : "DESKTOP"} device</p>
        <p>
          My width breakpoint is
            <input type = 'number' value = {this.state.breakpoint}
              onChange = {(e) => { this.setState({ breakpoint : e.target.value}, this.determineIsMobile)}}
            />
        </p>
      </div>
    );
  }
}

export default App;
