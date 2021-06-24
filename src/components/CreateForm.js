const CreateForm = (props) => {
  const { handleInput, component, experienceList, educationList, id } = props;
  if (component === 'Experience') {
    return (
      <form>
        <input type='text' value={experienceList[id].position} name='position' placeholder='Position' onChange={(e) => handleInput(e, 'experienceList', false, '', id)}></input>
        <input type='text' value={experienceList[id].company} name='company' placeholder='Company' onChange={(e) => handleInput(e, 'experienceList', false, '', id)}></input>
        <input type='text' value={experienceList[id].from} name='from' placeholder='From' onChange={(e) => handleInput(e, 'experienceList', false, '', id)}></input>
        <input type='text' value={experienceList[id].to} name='to' placeholder='To' onChange={(e) => handleInput(e, 'experienceList', false, '', id)}></input>
        <button className='delete'>Delete</button>
      </form>
    )
  } else {
    return (
      <form>
        <input type='text' value={educationList[id].university} name='university' placeholder='University' onChange={(e) => handleInput(e, 'educationList', false, '', id)}></input>
        <input type='text' value={educationList[id].degree} name='degree' placeholder='Degree/Subject' onChange={(e) => handleInput(e, 'educationList', false, '', id)}></input>
        <input type='text' value={educationList[id].from} name='from' placeholder='From' onChange={(e) => handleInput(e, 'educationList', false, '', id)}></input>
        <input type='text' value={educationList[id].to} name='to' placeholder='To' onChange={(e) => handleInput(e, 'educationList', false, '', id)}></input>
        <button className='delete'>Delete</button>
      </form>
    )
  }
    
}
 
export default CreateForm;