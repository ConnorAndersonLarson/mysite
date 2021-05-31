import './About.css';

function About() {

  return(
    <section>
      <div className="title">
        <h2 className="caption">About Me</h2>
      </div>
      <div className="aboutGrid">
        <section className="about">
        </section>
        <aside className="skills">
          <h3 className="lTitle tOne">Technologies</h3>
          <ul className="list lOne">
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>React.js</li>
          </ul>
          <ul className="list lTwo">
            <li>TypeScript</li>
            <li>Travis CI</li>
            <li>Cypress</li>
            <li>Mocha/Chai</li>
            <li>React/Router</li>
          </ul>
          <h3 className="lTitle tTwo">Skills</h3>
          <ul className="list lThree">
            <li>Project Management</li>
            <li>Accessibility</li>
            <li>Test Driven Development</li>
            <li>User/Developer Empathy</li>
            <li>Agile/Scrum</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default About;
