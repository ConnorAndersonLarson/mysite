import './Home.css';
import Project from '../Project/Project.js';
import {currentProject} from '../../data/projects/proj-data.js';

function Home() {

  return(
    <section>
      <div className="title">
        <h2 className="caption">My Current Project</h2>
      </div>
      <Project proj={currentProject[0]}/>
    </section>
  )
}

export default Home;
