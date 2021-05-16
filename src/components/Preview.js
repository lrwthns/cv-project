import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, education } = this.props;
    return (
    <div>
      this is output
      <div>{personal.firstName}</div>
      <div>{personal.lastName}</div>
      <div>{personal.title}</div>
      <div>{personal.address}</div>
      <div>{personal.phone}</div>
      <div>{personal.mail}</div>
      <div>{personal.linkedIn}</div>
      <div>{personal.desc}</div>
      <div>
        <div>{experience.position}</div>
        <div>{experience.city}</div>
        <div>{experience.company}</div>
        <div>{experience.from}</div>
        <div>{experience.to}</div>
      </div>
      <div>
        <div>{education.university}</div>
        <div>{education.city}</div>
        <div>{education.degree}</div>
        <div>{education.subject}</div>
        <div>{education.from}</div>
        <div>{education.to}</div>
      </div>
    </div>
    )
  }
}

export default Preview;