import React from 'react';

const Preview = (props) => {
    const { personal, experienceList, educationList } = props;
    // sorts the lists by from date
    const sortedExperienceList = [...experienceList].sort((a, b) => (a.from > b.from) ? -1 : 1);
    const sortedEducationList = [...educationList].sort((a, b) => (a.from > b.from) ? -1 : 1);
    
    return (
    <div className='Preview'>
      <div className="preview-header">
        <div className="preview-name">
          <div>{personal.firstName + ' ' + personal.lastName}</div>
        </div>
        <div>{personal.title}</div>
      </div>
      <div className="preview-main">
        <div className="preview-desc">
          <h1 className="preview-label">Description</h1>
          <div>{personal.desc}</div>
        </div>
        <div className="preview-experience-container">
          <h1 className="preview-label">Experience</h1>
          {
            sortedExperienceList.map((experience, index) => {
              return (
                <div className="preview-experience" key={index}>
                  <div>{experience.from + ' - ' + experience.to}</div>
                  <div>
                    <div>{experience.position}</div>
                    <div>{experience.company}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="preview-education-container">
          <h1 className="preview-label">Education</h1>
          {
            sortedEducationList.map((education, index) => {
              return (
                <div className="preview-education" key={index}>
                  <div>{education.from + ' - ' + education.to}</div>
                  <div>
                    <div>{education.university}</div>
                    <div>{education.degree}</div>
                  </div>
                </div>        
              )
            }) 
          }
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

export default Preview;