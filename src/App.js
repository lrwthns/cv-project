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
      experience: {
        position: 'Senior Web Developer',
        company: 'Google LLC',
        from: '2018',
        to: 'Present',
      },
      experienceList: [{
        position: '',
        company: '',
        from: '',
        to: '',
      }],
      education: {
        university: 'Stanford University',
        degree: 'Bachelor of Computer Science',
        from: '2010',
        to: '2014',
      },
      educationList: [{
        university: '',
        degree: '',
        from: '',
        to: '',
      }],
    }
  }


  changeState = (event, obj, addForm = false, formObj = '') => {
    if (addForm === true) {
      this.setState({
        [obj]: [...this.state[obj], formObj]
      }, () => {
        console.log(this.state[obj]);
        console.log(this.state)
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

  

  // changeState = (event, obj) => {
  //   const value = event.target.value;
  //   this.setState({
  //     ...this.state,
  //     [obj]: {
  //       ...this.state[obj],
  //       [event.target.name]: value,
  //     }
  //   }, () => {
  //     console.log(this.state[obj][event.target.name]);
  //     console.log(this.state)
  //   })
    
  // }

  render() {
    const { personalDetails, experience, education, experienceList, educationList } = this.state;
    return (
    <div className='App'>
      <div className='header'>CV Generator</div>
      <div className="main-container">
        <div className='input-container'>
          <PersonalInfo handleInput={this.changeState} personal={personalDetails}/>
          <Experience handleInput={this.changeState} experience={experience} experienceList={experienceList}/>
          <Education handleInput={this.changeState} education={education} educationList={educationList}/>
          <button>Generate PDF</button>
        </div>
        <div className='output-container'>
          <Preview personal={personalDetails} experience={experience} education={education}/>
        </div>
      </div>

    </div>
    )
  };
}

export default App;
