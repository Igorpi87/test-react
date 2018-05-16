import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({name: val});
}

  handleSubmit(e) {
    e.preventDefault();
    alert("Имя: " + this.state.name);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
                <p className="App-intro">
                    <label>Тескт:</label><br />
                    <input type="text" value={this.state.name} onChange={this.onChange}/>
                </p>
                <input type="submit" value="Отправить" />
            </form>
      </div>
    );
  }
}

export default App;
