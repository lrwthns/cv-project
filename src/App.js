import './styles/App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      personalDetails: {
        firstName: '',
        lastName: '',
        role: '',
        phone: '',
        address: '',
        mail: '',
        linkedIn: '',
        desc: '',
      },
    }
  }

  // changePersonalDetails() {
  //   this.setState
  // }


  render() {
    return <div className="App">
    </div>
  };
}

export default App;
