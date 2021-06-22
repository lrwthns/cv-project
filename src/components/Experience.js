import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  createExperienceForm = () => {
    const { handleInput, experience } = this.props;
    return (
      <form>
        <input type='text' value={experience.position} name='position' placeholder='Position' onChange={(e) => handleInput(e, 'experience')}></input>
        <input type='text' value={experience.company} name='company' placeholder='Company' onChange={(e) => handleInput(e, 'experience')}></input>
        <input type='text' value={experience.from} name='from' placeholder='From' onChange={(e) => handleInput(e, 'experience')}></input>
        <input type='text' value={experience.to} name='to' placeholder='To' onChange={(e) => handleInput(e, 'experience')}></input>
        <button className='delete'>Delete</button>
      </form>
    )
  }

  attachForm = (container) => {
    const newForm = this.createExperienceForm();
    container.appendChild(newForm);
  }

  render() {
    return ( 
    <div className='Experience'>
      <div>Experience</div>
      <div className='experience-form-container'>
        <this.createExperienceForm/>
      </div>
      <button className='add' onClick={this.attachForm}>
        Add
      </button>
    </div>
    )
  }
}

export default Experience;