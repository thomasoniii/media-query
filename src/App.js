import React, { Component } from 'react';

import NavBar             from './NavBar';
import DesktopScreen      from './DesktopScreen';
import OtherDesktopScreen from './OtherDesktopScreen';
import MobileScreen       from './MobileScreen';

import './App.css';

const BREAKPOINT   = localStorage.getItem('breakpoint') || 470;
const MOBILE_FIRST = localStorage.getItem('mobileFirst') === 'true' ? true : false;
console.log("STORAGE : ", localStorage.getItem('mobileFirst'));
class App extends Component {

  state = {
    breakpoint  : BREAKPOINT,
    mobileFirst : MOBILE_FIRST,
    screen      : MOBILE_FIRST
      ? <MobileScreen getBreakpoint={() => this.state.breakpoint}/>
      : <DesktopScreen/>
  }

  constructor(props) {
    super(props);

  }

  setMobileFirst(checked) {
    this.setState({mobileFirst : checked});
    localStorage.setItem('mobileFirst', checked);
  }

  setBreakpoint(breakpoint) {
    this.setState({breakpoint});
    localStorage.setItem('breakpoint', breakpoint);
  }

  metaTagValue() {
    let meta = document.querySelector('meta[name="viewport"]');
    if (meta !== null) {
      return meta.getAttribute('content');
    }
  }

  render() {

    console.log("RENDER APP", this.state.screen);

    const metaContent = this.metaTagValue();

    return (
      <div className='App'>
        { this.state.screen }
        <NavBar
          onDesktop1 = { () => this.setState({screen : <DesktopScreen/>})}
          onDesktop2 = { () => this.setState({screen : <OtherDesktopScreen/>})}
          onMobile   = { () => this.setState({screen : <MobileScreen getBreakpoint={() => this.state.breakpoint}/>})}
        />
        <p>
          My width breakpoint is
            <input type = 'number' value = {this.state.breakpoint}
              onChange = { (e) => { this.setBreakpoint(e.target.value) } }
            />
        </p>
        <p>Start on mobile page on load:
          <input type = 'checkbox'
            checked={this.state.mobileFirst}
            onChange={ (e) => this.setMobileFirst(e.target.checked) }
          />
        </p>
        <p>The meta viewport tag{"'"}s content is currently <b>[{ metaContent }]</b> </p>
        <p><a href = 'https://github.com/thomasoniii/media-query'>View the source</a></p>
      </div>
    );
  }
}

export default App;
