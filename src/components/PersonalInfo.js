import React, { Component } from 'react';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleInput } = this.props;
    return (
      <div className='Personal'>
        <div>
        Personal Information
        </div>
        <form>
          <input type='text' name='firstName' placeholder='First Name' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' name='lastName' placeholder='Last Name' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' name='title' placeholder='Title' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' name='phone' placeholder='Phone Number' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' name='mail' placeholder='Email' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <input type='text' name='linkedIn' placeholder='LinkedIn' onChange={(e) => {handleInput(e, 'personalDetails')}}></input>
          <textarea name='desc' placeholder='Description' onChange={(e) => {handleInput(e, 'personalDetails')}}></textarea>
        </form>
      </div>
    )
  }
}

export default PersonalInfo;