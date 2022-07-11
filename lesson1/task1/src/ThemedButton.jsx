import React from 'react';
import { ThemedContext } from './themes-conntext';

class ThemedButton extends React.Component {
  render() {
    this.context;
    return <button {...this.props} style={{
        backgroundColor: this.context.background,
        color: this.context.fontColor,
    }} 
    className="btn" />;
  }
}

ThemedButton.contextType = ThemedContext;

export default ThemedButton;
