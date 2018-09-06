import React, { Component } from 'react';

export default class MobileScreen extends Component {

    state = { }

    constructor(props) {
      super(props);

      this.windowResize = this.windowResize.bind(this);
    }

    windowResize() {

      if (this.lastWidth !== document.body.clientWidth || this.lastHeight !== document.body.clientWidth) {
        this.determineIsMobile();
      }
      this.lastWidth  = document.body.clientWidth;
      this.lastHeight = document.body.clientHeight;

    }

    determineIsMobile() {

      let meta = document.querySelector('meta[name="viewport"]');

      meta.setAttribute('content', 'width=device-width, initial-scale=1, minimum-scale=1');

      let isMobile = false;
      if ( document.body.clientWidth < this.props.getBreakpoint() ) {
        isMobile = true;
      }
      else {
        isMobile = false;
        meta.setAttribute('content', '');
      }

      this.setState({ isMobile, width : document.body.clientWidth, height : document.body.clientHeight});

    }

    componentDidMount() {
      this.determineIsMobile();
      console.log("MY MOBILE COMPONENT IS MOUNTING");
      this.lastWidth  = document.body.clientWidth;
      this.lastHeight = document.body.clientHeight;
      window.addEventListener('resize', this.windowResize);
    }

    componentWillUnmount() {
      console.log("IT IS UNMOUNTING");
      window.removeEventListener('resize', this.windowResize);
      let meta = document.querySelector('meta[name="viewport"]');
      meta.setAttribute('content', '');
    }


    render() {

      console.log("RENDER MOBILE");
      return (
        <div className={this.state.isMobile ? 'mobile' : 'desktop'}>
          <p>This is a mobile responsive page, which should vary its view based upon size.</p>
          <p>Its dimensions are { document.body.clientWidth } x { document.body.clientHeight }</p>
          <p>The width is currently { document.body.clientWidth } and if it drops below { this.props.getBreakpoint() }, the page
          should turn green to indicate it is the mobile view</p>
          <p><b>Sometimes this page will be yellow, sometimes it will be green.</b></p>
          <p>Currently, this page thinks it is running on a { this.state.isMobile ? "MOBILE" : "DESKTOP"} device</p>
          <p>My width breakpoint is { this.props.getBreakpoint() }</p>
          <p>Changing the page from portrait to landscape mode should change from mobile to desktop; changing it from
          landscape to portrait should change it from desktop to mobile.</p>
        </div>
      );
    }
}
