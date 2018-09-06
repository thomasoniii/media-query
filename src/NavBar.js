import React, {Component} from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <button onClick = {this.props.onDesktop1}>
          <img src = '/desktop1.png' alt = 'desktop'/>
        </button>
        <button onClick = {this.props.onDesktop2}>
          <img src = '/desktop2.png' alt = 'other desktop'/>
        </button>
        <button onClick = {this.props.onMobile}>
          <img src = '/mobile.png' alt = 'mobile'/>
        </button>
      </div>
    )
  }
}
