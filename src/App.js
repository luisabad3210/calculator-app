import React from 'react';
import './App.css';
import KeyPad from './components/KeyPad.js';
import Output from './components/Output.js';

class App extends React.Component {

  state = {
    result: ''
  };

  buttonPressed = buttonName => {
    if (buttonName === '=') {
      this.calculate()
    } else if (buttonName === 'AC') {
      this.reset();
    } else if (buttonName === 'CE') {
      this.backspace();
    } else 
      this.setState({
        result: this.state.result + buttonName
      });
  };

  backspace = () => {
    this.setState({
      reset: this.state.result.slice(0, -1)
    });
  };
  reset = () => {
    this.setState({
      result: ''
    })
  }
  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || '') + ''
    });
  } catch (e) {
    this.setState({
      result: 'error'
    });
  }
};

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <div className='body'>
            <Output result={this.state.result} />
            <KeyPad buttonPressed={this.buttonPressed} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;