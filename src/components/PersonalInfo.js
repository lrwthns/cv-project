import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    const { handleInput, personal } = this.props;
    return (
      <div className='Personal'>
        <div className='input-label'>
        Personal Information
        </div>
        <form>
          <input type='text' value={personal.firstName} name='firstName' placeholder='First Name' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' value={personal.lastName} name='lastName' placeholder='Last Name' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' value={personal.title} name='title' placeholder='Title' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' value={personal.phone} name='phone' placeholder='Phone Number' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' value={personal.mail} name='mail' placeholder='Email' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' value={personal.linkedIn} name='linkedIn' placeholder='LinkedIn' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <textarea value={personal.desc} name='desc' placeholder='Description' onChange={(e) => {handleInput(e, 'personalDetails')}}></textarea>
        </form>
      </div>
    )
  }
}

export default PersonalInfo;