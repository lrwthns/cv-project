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

  loadExampleState = () => {
    this.setState({
      personalDetails: {
        firstName: 'Andre',
        lastName: 'Lance',
        title: 'Web Developer',
        phone: '+098 756 32 41',
        mail: 'andre.lance@gmail.com',
        linkedIn: 'linkedin.com/in/andrelance',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      experienceList: [{
        position: 'Senior Web Developer',
        company: 'Airbnb Inc.',
        from: '2019',
        to: 'Present',
      }, {
        position: 'Web Developer',
        company: 'Jetz Technologies',
        from: '2016',
        to: '2018',
      }, {
        position: 'Junior Web Developer',
        company: 'Philodendron LLC',
        from: '2014',
        to: '2016',
      }, {
        position: 'Web Development Intern',
        company: 'Amazon Inc.',
        from: '2013',
        to: '2014',
      }, ],
      educationList: [{
        university: 'University of Colorado Boulder',
        degree: 'B.S. in Computer Science',
        from: '2010',
        to: '2014',
      }, {
        university: 'Miami State University',
        degree: 'A.A. in Programming',
        from: '2008',
        to: '2010',
      }],
    })
  }

  resetState = () => {
    this.setState({
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
    }, () => {
      console.log(this.state);
    })
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
            <button onClick={this.loadExampleState}>Load Example</button>
            <button onClick={this.resetState}>Reset</button>
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
