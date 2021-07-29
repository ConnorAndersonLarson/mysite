import './Home.css';
import Project from '../Project/Project.js';
import {mainPageTestData} from '../../data/projects/test-data.js';

function Home() {

  return(
    <section>
      <div className="title">
        <h2 className="caption">My Latest Project</h2>
      </div>
      <Project proj={mainPageTestData}/>
    </section>
  )
}

export default Home;
