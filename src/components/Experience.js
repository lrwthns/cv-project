import React, { Component } from 'react';
import CreateForm from './CreateForm';

class Experience extends Component {
  render() {
    const { handleInput, experienceList } = this.props;
    return ( 
    <div className='Experience'>
      <div className='input-label'>
      Experience
      </div>
      <div className='experience-form-container'>
        {
          experienceList.map((exp, index) => {
            return <CreateForm handleInput={handleInput} component='Experience' experienceList={experienceList} key={index} id={index}/>
          })
        }
      </div>
      <button className='add' onClick={(e) => { 
          handleInput(e, 'experienceList', '', {
            position: '',
            company: '',
            from: '',
            to: '',
          }, true)
        }
      }>Add</button>
    </div>
    )
  }
}

export default Experience;