import React, { Component } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';
import ReactToPrint from 'react-to-print';

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalDetails: {
        firstName: '',
        lastName: '',
        title: '',
        phone: '',
        mail: '',
        linkedIn: '',
        desc: '',
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
      })
    } else if (deleteForm === true) {
      event.preventDefault()
      this.setState({
        [obj]: this.state[obj].filter((item, i) => i !== id)
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
      })
    } else {
      const value = event.target.value;
      this.setState({
        [obj]: {
          ...this.state[obj],
          [event.target.name]: value,
        }
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
            <ReactToPrint trigger={() => {
              return <button>Generate PDF</button>
            }} content={() => this.componentRef} fonts={[{family: 'Karla', local:'./fonts/Karla-ExtraLight.ttf'}]}/>
            <button>Load Example</button>
            <button>Reset</button>
          </div>
        </div>
        <div className='output-container'>
          <Preview ref={el => (this.componentRef = el)} personal={personalDetails} experienceList={experienceList} educationList={educationList}/>
        </div>
      </div>

    </div>
    )
  };
}

export default App;
