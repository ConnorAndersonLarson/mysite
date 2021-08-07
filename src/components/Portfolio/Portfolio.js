import './Portfolio.css';
import Project from '../Project/Project.js';
import Switcher from '../Switcher/Switcher.js';
import {projectData} from '../../data/projects/proj-data.js';
import { useState } from 'react';

function Portfolio() {
  const [project, setProject] = useState(0);

  return(
    <section>
      <div className="title">
        <Switcher name={'Past Projects'} item={project} setItem={setProject} gallery={projectData} />
      </div>
      <Project proj={projectData[project]}/>
    </section>
  )
}

export default Portfolio;
