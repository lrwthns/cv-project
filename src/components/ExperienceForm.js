const ExperienceForm = (props) => {
  const { handleInput, experience, experienceList, id } = props;
    return (
      <form>
        <input type='text' value={experienceList[id].position} name='position' placeholder='Position' onChange={(e) => handleInput(e, 'experienceList')}></input>
        <input type='text' value={experienceList[id].company} name='company' placeholder='Company' onChange={(e) => handleInput(e, 'experienceList')}></input>
        <input type='text' value={experienceList[id].from} name='from' placeholder='From' onChange={(e) => handleInput(e, 'experienceList')}></input>
        <input type='text' value={experienceList[id].to} name='to' placeholder='To' onChange={(e) => handleInput(e, 'experienceList')}></input>
        <button className='delete'>Delete</button>
      </form>
    )
}
 
export default ExperienceForm;