import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  createEducationForm = () => {
    const { handleInput } = this.props;
    return (
      <form>
        <input type='text' name='university' placeholder='University' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' name='city' placeholder='City' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' name='degree' placeholder='Degree' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' name='from' placeholder='From' onChange={(e) => handleInput(e, 'education')}></input>
        <input type='text' name='to' placeholder='To' onChange={(e) => handleInput(e, 'education')}></input>
        <button className='delete'>Delete</button>
      </form>
    )
  }

  render() {
    return (
      <div className='Education'>
        <div>Education</div>
        <this.createEducationForm/>
        <button className='add'>Add</button>
      </div>
    )
  }
}

export default Education;