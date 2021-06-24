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
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'Senior Web Developer',
        phone: '+012 345 67 890',
        mail: 'jane.doe@gmail.com',
        linkedIn: 'linkedin.com/in/janedoe',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      experienceList: [{
        position: '',
        company: '',
        from: '',
        to: '',
      }],
      educationList: [{
        university: '',
        degree: '',
        from: '',
        to: '',
      }],
    }
  }

  changeState = (event, obj, id = '', formObj = '', addForm = false, deleteForm = false) => {
    if (addForm === true) {
      this.setState({
        [obj]: [...this.state[obj], formObj]
      }, () => {
        console.log(this.state[obj]);
        console.log(this.state)
      })
    } else if (deleteForm === true) {
      event.preventDefault()
      this.setState({
        [obj]: this.state[obj].filter((item, i) => i !== id)
      }, () => {
        console.log(this.state)
      })
    } else if (obj === 'experienceList' || obj === 'educationList') {
      const value = event.target.value;
      this.setState({
        [obj]: [
          ...this.state[obj].slice(0, id),
          {
            ...this.state[obj][id],
            [event.target.name]: value,
          },
          ...this.state[obj].slice(id+1),
      ]
      }, () => {
        console.log(this.state);
      })
    } else {
      const value = event.target.value;
      this.setState({
        [obj]: {
          ...this.state[obj],
          [event.target.name]: value,
        }
      }, () => {
        console.log(this.state[obj][event.target.name]);
        console.log(this.state)
      })
    }
  }

  render() {
    const { personalDetails, experienceList, educationList } = this.state;
    return (
    <div className='App'>
      <div className='header'>CV Generator</div>
      <div className='main-container'>
        <div className='input-container'>
          <PersonalInfo handleInput={this.changeState} personal={personalDetails}/>
          <Experience handleInput={this.changeState} experienceList={experienceList}/>
          <Education handleInput={this.changeState} educationList={educationList}/>
          <div className='input-buttons'>
            <button>Generate PDF</button>
            <button>Load Example</button>
            <button>Reset</button>
          </div>
        </div>
        <div className='output-container'>
          <Preview personal={personalDetails} experienceList={experienceList} educationList={educationList}/>
        </div>
      </div>

    </div>
    )
  };
}

export default App;
