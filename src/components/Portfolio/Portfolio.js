import './Portfolio.css';
import Project from '../Project/Project.js';
import {projectData} from '../../data/projects/proj-data.js';
import { useState } from 'react';

function Portfolio() {
  const [project, setProject] = useState(0)

  const changeProject = (e, n) => {
    e.preventDefault();
    if (project === projectData.length-1 && n === 2) {
      setProject(0)
    } else if (project === 0 && n === 0) {
      setProject(projectData.length-1)
    } else {
      setProject(project + n - 1)
    }
  }

  return(
    <section>
      <div className="title">
        <section className="title-interface">
          <button className="port-btn" id="back" onClick={event => changeProject(event, 0)}>«</button>
          <h2 className="caption">Past Projects</h2>
          <button className="port-btn" id="forward" onClick={event => changeProject(event, 2)}>»</button>
        </section>
      </div>
      <Project proj={projectData[project]}/>
    </section>
  )
}

export default Portfolio;
