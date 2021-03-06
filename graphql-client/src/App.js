import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.welcomeMessage.welcome}
        </p>
      </div>
    );
  }
}

const QUERY = gql`
  {
    welcome
  }
`

export default graphql(QUERY, {
  name: 'welcomeMessage'
})(App);
