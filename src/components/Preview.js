import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, experience, education } = this.props;
    return (
    <div className='Preview'>
      <div className="preview-header">
        <div className="preview-name">
          <div>{personal.firstName}</div>
          <div>{personal.lastName}</div>
        </div>
        <div>{personal.title}</div>
      </div>
      <div className="preview-main">
        <div className="preview-desc">
          <h1 className="preview-label">Description</h1>
          <div>{personal.desc}</div>
        </div>
        <div>
          <h1 className="preview-label">Experience</h1>
          <div>{experience.position}</div>
          <div>{experience.company}</div>
          <div>{experience.from}</div>
          <div>{experience.to}</div>
        </div>
        <div>
          <h1 className="preview-label">Education</h1>
          <div>{education.university}</div>
          <div>{education.degree}</div>
          <div>{education.from}</div>
          <div>{education.to}</div>
        </div>
      </div>
      <div className="preview-sidebar">
        <h1 className="preview-label">Personal Details</h1>
        <div className="preview-phone">
          <h2>Phone Number</h2>
          <div>{personal.phone}</div>
        </div>
        <div className="preview-email">
          <h2>Email</h2>
          <div>{personal.mail}</div>
        </div>
        <div className="preview-linkedIn">
          <h2>LinkedIn</h2>
          <div>{personal.linkedIn}</div>
        </div>
      </div>
    </div>
    )
  }
}

export default Preview;