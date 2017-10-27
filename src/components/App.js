import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { projects } from '../utils/helpers.js';


const Project = (props) => {
  const project = props.data;
  return (
    <div className="project">
      <img src={process.env.PUBLIC_URL + project.image} alt=""/>
      <div className="project-description">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-btns">
        <div className="project-btn">
          <a href={project.gitHubURL} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        {project.demoURL &&  <div className="project-btn"><a href={project.demoURL} target="_blank" rel="noopener noreferrer">Demo</a></div>}
      </div>
    </div>
  );
}


class App extends Component {

  handleScroll = (ref) => {
    const dom = ReactDOM.findDOMNode(ref);
    window.scroll({top: dom.offsetTop, left: 0, behavior: 'smooth'});
  }

  render() {
    return (
      <div className="page-container">
        <div className="home">
          <header className="home-header">
            <ul>
              <li onClick={() => this.handleScroll(this.refs.skills)}>Skills</li>
              <li onClick={() => this.handleScroll(this.refs.projects)}>Projects</li>
              <li onClick={() => this.handleScroll(this.refs.contact)}>Contact</li>
            </ul>
          </header>
          <div className="home-title">
            <h1>Dmitry Shatalov</h1>
            <h3>Web and Mobile Developer</h3>
          </div>
          <div className="home-footer">
            <i onClick={() => this.handleScroll(this.refs.skills)} className="fa fa-angle-down fa-5x" aria-hidden="true"></i>
          </div>
        </div>
        <div className="skills" ref="skills">
          <div className="skill">
            <i className="fa fa-code fa-5x" aria-hidden="true"></i>
            <h3>Front End Developer</h3>
            <p>React, Redux, Express, Knockout, Chai, Mocha, Webpack, Gulp.</p>
          </div>
          <div className="skill">
            <i className="fa fa-mobile fa-5x" aria-hidden="true"></i>
            <h3>Mobile Developer</h3>
            <p>Native apps for both iOS and Android with React Native.</p>
          </div>
          <div className="skill">
            <i className="fa fa-window-restore fa-4x" aria-hidden="true"></i>
            <h3>Responsive Web Designer</h3>
            <p>SEO compatible web design for desktops, tablets, and phones.</p>
          </div>
        </div>
        <div className="projects" ref="projects">
          <h2>Projects</h2>
          <div className="projects-list">
            {projects.map(project => {
              return <Project key={project.name} data={project} />;
            })}
          </div>
        </div>
        <div className="contact" ref="contact">
          <h2>Contact Me</h2>
          <div className="social-icons">
            <a href="https://github.com/shatalovdm" target="_blank" name="GitHub" rel="noopener noreferrer">
              <i className="fa fa-github fa-4x" aria-hidden="true"></i>
            </a>
            <a href="mailto:innoshatalov@gmail.com">
              <i className="fa fa-envelope fa-4x" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/dmitryshatalov/" target="_blank" name="LinkedIn" rel="noopener noreferrer">
              <i className="fa fa-linkedin fa-4x" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/shatalov.da" target="_blank" name="Facebook" rel="noopener noreferrer">
              <i className="fa fa-facebook fa-4x" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/DmitryShatalov" target="_blank" name="Twitter" rel="noopener noreferrer">
              <i className="fa fa-twitter fa-4x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <footer>
          <p><span role="img" aria-label="Love">❤️</span>&nbsp; open source and my wife</p>
        </footer>
      </div>
    );
  }
}

export default App;
