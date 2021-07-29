import './Project.css'
import React from 'react';
function Project( {proj} ) {

  const techStack = proj.stack.map((tech, i) => {
    return <React.Fragment key={i.toString()}><li>{tech}<br /></li></React.Fragment>
  })

  return(
    <section className='project'>
      <h2 className="proj-title">{proj.name}</h2>
      <section className="proj-breakdown">
        <h3 className="proj-time">Hours to Complete: {proj.compTime}</h3>
        <h3 className="proj-team">Team Size: {proj.teamQuant}</h3>
      </section>
      <p className="proj-abstract">{proj.abst}</p>
      <section className="proj-stack">
        <h3 className="stack-header">Primary Technologies Used:</h3>
        <ul className="stack-list">{techStack}</ul>
      </section>
    </section>
  )
}

export default Project;
