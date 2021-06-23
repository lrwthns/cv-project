import React, { Component } from 'react';
import ExperienceForm from './ExperienceForm';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  // createExperienceForm = () => {
  //   const { handleInput, experience } = this.props;
  //   return (
  //     <form>
  //       <input type='text' value={experience.position} name='position' placeholder='Position' onChange={(e) => handleInput(e, 'experience')}></input>
  //       <input type='text' value={experience.company} name='company' placeholder='Company' onChange={(e) => handleInput(e, 'experience')}></input>
  //       <input type='text' value={experience.from} name='from' placeholder='From' onChange={(e) => handleInput(e, 'experience')}></input>
  //       <input type='text' value={experience.to} name='to' placeholder='To' onChange={(e) => handleInput(e, 'experience')}></input>
  //       <button className='delete'>Delete</button>
  //     </form>
  //   )
  // }

  render() {
    const { handleInput, experience, experienceList } = this.props;
    return ( 
    <div className='Experience'>
      <div>Experience</div>
      <div className='experience-form-container'>
        {experienceList.map((exp, index) => {
          return <ExperienceForm handleInput={handleInput} experience={experience} experienceList={experienceList} key={index} id={index}/>
        })}
      </div>
      <button className='add' onClick={(e) => { 
          handleInput(e, 'experienceList', true, {
            position: '',
            company: '',
            from: '',
            to: '',
          })
        }
      }>Add</button>
    </div>
    )
  }
}

export default Experience;