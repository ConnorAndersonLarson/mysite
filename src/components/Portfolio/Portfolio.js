import './Portfolio.css';
import Project from '../Project/Project.js';
import {mainPageTestData} from '../../data/projects/test-data.js';
import { useState } from 'react';

function Portfolio() {
  const [project, setProject] = useState(0)

  const changeProject = (e, n) => {
    e.preventDefault();
    if (project === mainPageTestData.length-1 && n === 2) {
      setProject(0)
    } else if (project === 0 && n === 0) {
      setProject(mainPageTestData.length-1)
    } else {
      setProject(project + n - 1)
    }
  }

  return(
    <section>
      <div className="title">
        <button id="back" onClick={event => changeProject(event, 0)}>Back</button>
        <h2 className="caption">Past Projects</h2>
        <button id="forward" onClick={event => changeProject(event, 2)}>Forward</button>
      </div>
      <Project proj={mainPageTestData[project]}/>
    </section>
  )
}

export default Portfolio;
