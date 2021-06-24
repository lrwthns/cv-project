import React, { Component } from 'react';
import CreateForm from './CreateForm';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleInput, educationList } = this.props;
    return (
      <div className='Education'>
        <div>Education</div>
        {educationList.map((edu, index) => {
          return <CreateForm handleInput={handleInput} component='Education' educationList={educationList} key={index} id={index}/>
        })}
        <button className='add' onClick={(e) => {
            handleInput(e, 'educationList', true, {
              education: '',
              degree: '',
              from: '',
              to: '',
            })
          }
        }>Add</button>
      </div>
    )
  }
}

export default Education;