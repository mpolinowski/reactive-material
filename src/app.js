import React, { Component } from 'react';
import './app.css';
import 'typeface-roboto';

// import ButtonAppBar from './ButtonAppBar'
import ResponsiveDrawer from './ResponsiveDrawer';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          
        </header>
        <div className="content">
          <ResponsiveDrawer />
        </div>
      </div>
    );
  }
}

export default App;
