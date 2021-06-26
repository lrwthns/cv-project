import React, { useRef, useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Education from './components/Education';
import Preview from './components/Preview';
import ReactToPrint from 'react-to-print';

const App = () => {
  const [ state, setState ] = useState({
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
  });

  const changeState = (event, obj, id = '', formObj = '', addForm = false, deleteForm = false) => {
    if (addForm === true) {
      setState({
        [obj]: [...state[obj], formObj]
      })
    } else if (deleteForm === true) {
      event.preventDefault()
      setState({
        [obj]: state[obj].filter((item, i) => i !== id)
      })
    } else if (obj === 'experienceList' || obj === 'educationList') {
      const value = event.target.value;
      setState({
        [obj]: [
          ...state[obj].slice(0, id),
          {
            ...state[obj][id],
            [event.target.name]: value,
          },
          ...state[obj].slice(id+1),
      ]
      })
    } else {
      const value = event.target.value;
      setState({
        [obj]: {
          ...state[obj],
          [event.target.name]: value,
        }
      })
    }
  }

  const loadExampleState = () => {
    setState({
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

  const resetState = () => {
    setState({
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
    })
  }

  const { personalDetails, experienceList, educationList } = state;
  const componentRef = useRef();

  return (
  <div className='App'>
    <div className='header'>CV Generator</div>
    <div className='main-container'>
      <div className='input-container'>
        <PersonalInfo handleInput={changeState} personal={personalDetails}/>
        <Experience handleInput={changeState} experienceList={experienceList}/>
        <Education handleInput={changeState} educationList={educationList}/>
        <div className='input-buttons'>
          <ReactToPrint 
          trigger={() => <button>Generate PDF</button>} 
          content={() => componentRef.current}/>
          <button onClick={loadExampleState}>Load Example</button>
          <button onClick={resetState}>Reset</button>
        </div>
      </div>
      <div ref={componentRef} className='output-container'>
        <Preview personal={personalDetails} experienceList={experienceList} educationList={educationList}/>
      </div>
    </div>
  </div>
  )
}

export default App;
