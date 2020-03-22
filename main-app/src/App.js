import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleSignInShowModal = async e => {
    e.preventDefault();
    localStorage.setItem("@test-Token", "QpwL5tke4Pnpja7X4");
    window.ReactCounter.mount({ token: localStorage.getItem("@test-Token") });
  };

  handleSignInDoNotShowModal = async e => {
    e.preventDefault();
    localStorage.setItem("@test-Token", "1");
    window.ReactCounter.mount({ token: localStorage.getItem("@test-Token") });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
          <div id="counter-app"></div>
          <form onSubmit={this.handleSignInShowModal}>
            <button type="submit">Entrar com Modal Sem Consentimento</button>
          </form>
          <form onSubmit={this.handleSignInDoNotShowModal}>
            <button type="submit">Entrar com Modal Com Consentimento</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
