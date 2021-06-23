import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  createEducationForm = () => {
    const { handleInput, education } = this.props;
    return (
      <form>
        <input type='text' value={education.university} name='university' placeholder='University' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' value={education.degree} name='degree' placeholder='Degree/Subject' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' value={education.from} name='from' placeholder='From' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' value={education.to} name='to' placeholder='To' onChange={(e) => handleInput(e, 'education')}></input>
        <button className='delete'>Delete</button>
      </form>
    )
  }

  render() {
    const { handleInput } = this.props;
    return (
      <div className='Education'>
        <div>Education</div>
        <this.createEducationForm/>
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