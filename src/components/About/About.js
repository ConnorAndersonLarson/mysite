import './About.css';

function About() {

  return(
    <section>
      <div className="title">
        <h2 className="caption">About Me</h2>
      </div>
      <div className="aboutGrid">
        <section className="about">
          <p>Combining 5 years of problem solving and process optimization with a lifelong creative passion, I’m a software developer looking to utilize my expertise to design and implement efficient, creative user experiences.</p>
          <p><br />On the human side of things I love being outdoors, biking, rock climbing, spending time with my wife, woodworking, and cooking/baking both for myself and for the workers at the local businesses around me.</p>
          <p><br /> I am driven by providing a better life for my wife and cats, lowering barriers to entry in all things I enjoy, and helping those around me have opportunities to excel at whatever they're passionate about.</p>
          <p><br /> If you want to talk shop (wood or work), share recipes, geek out over bicycles/cats/movies/etc. feel free to reach out by email at:</p>
          <p><b>connorandersonlarson@gmail.com</b></p>
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
