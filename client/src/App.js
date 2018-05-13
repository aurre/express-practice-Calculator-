import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Calculator</h1>
          </header>
          <p className="App-intro" />
        </div>

        <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputNumber1" className="sr-only">
              Number1
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Number1"
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only">
              Number2
            </label>
            <input
              type="password"
              className="form-control"
              id="inputNumber2"
              placeholder="Number2"
            />
          </div>
        </form>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Operation</label>
          <select id="inputState" className="form-control">
            <option>Choose...</option>
            <option>Add</option>
            <option>Substract</option>
            <option>Divide</option>
            <option>Multiply</option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
