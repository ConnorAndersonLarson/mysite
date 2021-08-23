import './Project.css'
import React from 'react';
import List from '../List/List.js';
import Switcher from '../Switcher/Switcher.js';
import { useState } from 'react';

function Project( {proj} ) {
  const [image, setImage] = useState(0);

  return(
    <section className='project'>
      <h2 className="proj-title">{proj.name}</h2>
      <section className="proj-breakdown">
        <h3 className="proj-time">Hours to Complete: {proj.compTime}</h3>
        <h3 className="proj-team">Team Size: {proj.teamQuant}</h3>
      </section>
      <div className="proj-abstract">
        <List info={proj.abst}/>
      </div>
      <section className="proj-side">
        <section className="proj-stack">
          <h3 className="stack-header">Primary Technologies Used:</h3>
          <List info={proj.stack}/>
        </section>
        {proj.isDeployed && <a href={proj.site} className="proj-btn" target="_blank" rel="noreferrer">View Site!</a>}
        {proj.codeRepo && <a href={proj.codeRepo} className="proj-btn" target="_blank" rel="noreferrer">View Code!</a>}
      </section>
      <section className="proj-gal">
        <img className="proj-img" src={proj.gal.photos[image]} alt={proj.gal.alt[image]}/>
        <div className="switcher">
          <Switcher name={'Screenshots'} item={image} setItem={setImage} gallery={proj.gal.photos}/>
        </div>
      </section>
    </section>
  )
}

export default Project;
