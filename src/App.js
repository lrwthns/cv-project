import './styles/App.css';
import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalDetails: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phone: '',
        mail: '',
        linkedIn: '',
        desc: '',
      },
      experience: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      },
      education: {
        university: '',
        city: '',
        degree: '',
        from: '',
        to: '',
      },
    }
  }

  changeState = (event, obj) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [obj]: {
        ...this.state[obj],
        [event.target.name]: value,
      }
    }, () => {
      console.log(this.state[obj][event.target.name]);
      console.log(this.state)
    })
    
  }


  render() {
    const { personalDetails, experience, education } = this.state;
    return (
    <div className='App'>
      <div className='header'>CV Generator</div>
      <div className='input-container'>
        <PersonalInfo handleInput={this.changeState}/>
        <Experience handleInput={this.changeState}/>
        <Education handleInput={this.changeState}/>
      </div>
      <div className='output-container'>
        <Preview personal={personalDetails} experience={experience} education={education}/>
      </div>
    </div>
    )
  };
}

export default App;
