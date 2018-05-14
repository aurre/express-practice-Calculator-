import React, { Component } from 'react';
import logo from './icon.png';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Number1: '',
      Number2: '',
      Text: '',
    };
  }

  handleChange = event => {
    // console.log(event.target.id);

    if (event.target.id === 'inputNumber1') {
      const value = event.target.value;
      this.setState({ Number1: value });
    } else {
      const value = event.target.value;
      this.setState({ Number2: value });
    }
  };

  handleSelected = event => {
    console.log(event.target.value);
    const operations = ['add', 'substract', 'multiply', 'divide'];

    const found = operations.find(function(operation) {
      return operation === event.target.value;
    });

    // if (event.target.value === 'add') {
    axios
      .get(
        `http://localhost:3000/${found}/${this.state.Number1}/${
          this.state.Number2
        }`
      )
      .then(res => {
        // console.log(res.data);
        this.setState({ Text: res.data });
      });
    // }
  };

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
              type="number"
              className="form-control"
              id="inputNumber1"
              placeholder="Number1"
              value={this.state.Number1}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only">
              Number2
            </label>
            <input
              type="number"
              className="form-control"
              id="inputNumber2"
              placeholder="Number2"
              value={this.state.Number2}
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div className="row justify-content-md-center">
          <button type="button" className="btn btn-light">
            <label htmlFor="inputState">Operation</label>
            <select
              onChange={this.handleSelected}
              id="inputState"
              className="form-control"
            >
              <option value="choose" defaultValue>
                Choose...
              </option>
              <option value="add">Add</option>
              <option value="substract">Substract</option>
              <option value="divide">Divide</option>
              <option value="multiply">Multiply</option>
            </select>
          </button>
        </div>
        <div className="square">
          <h2 className="result">{this.state.Text}</h2>
        </div>
      </div>
    );
  }
}

export default App;
