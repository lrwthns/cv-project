import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  createExperienceForm = () => {
    const { handleInput } = this.props;
    return (
      <form>
        <input type='text' name='position' placeholder='Position' onChange={(e) => handleInput(e, 'experience')}></input>
        <input type='text' name='company' placeholder='Company' onChange={(e) => handleInput(e, 'experience')}></input>
        <input type='text' name='from' placeholder='From' onChange={(e) => handleInput(e, 'experience')}></input>
        <input type='text' name='to' placeholder='To' onChange={(e) => handleInput(e, 'experience')}></input>
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