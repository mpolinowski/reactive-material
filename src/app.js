import React, { Component } from 'react';
import styles from './app.css';
import 'typeface-roboto';

import ButtonAppBar from './ButtonAppBar'

class App extends Component {
  render() {
    return (
      <div>
        <header className={styles.header}>
          <ButtonAppBar />
        </header>
      </div>
    );
  }
}

export default App;
