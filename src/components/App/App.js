import React, { Component } from 'react';
import { storage } from '../../config';
import Skill from '../Skill';
import './App.css';

class App extends Component {
  state = {
    projects: undefined,
  }

  componentDidMount(){
    storage.listenTo('projects', {
      context: this,
      asArray: true,
      then(projects){
        this.setState({projects});
      }
    });
  }

  render() {
    const { projects } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Luiz Filipe's Portifolio</h1>
          <h1 className="App-title">Full-Stack Software Developer</h1>
        </header>
        <div className="App-intro">
          {projects && projects.map((project, index) => (
            <Skill
              key={index}
              title={project.title}
              abstract={project.abstract}
              projectLink={project.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
