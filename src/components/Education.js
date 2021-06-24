import React, { Component } from 'react';
import CreateForm from './CreateForm';

class Education extends Component {
  render() {
    const { handleInput, educationList } = this.props;
    return (
      <div className='Education'>
        <div className='input-label'>
        Education
        </div>
        {
          educationList.map((edu, index) => {
            return <CreateForm handleInput={handleInput} component='Education' educationList={educationList} key={index} id={index}/>
          })
        }
        <button className='add' onClick={(e) => {
            handleInput(e, 'educationList', '', {
              university: '',
              degree: '',
              from: '',
              to: '',
            }, true)
          }
        }>Add</button>
      </div>
    )
  }
}

export default Education;