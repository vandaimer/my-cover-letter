import React, { Component } from 'react';
import Skill from '../Skill';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Luiz Filipe's Portifolio</h1>
          <h1 className="App-title">Full-Stack Software Developer</h1>
        </header>
        <div className="App-intro">
          <Skill
            title="ReactJS"
            abstract="A simple project to show my skills (Is this web site)."
            image="https://cdn-images-1.medium.com/max/800/1*XaGxIa_JuHc8YTR5Znv6tg.png"
            projectLink="https://github.com/vandaimer/my-cover-letter"
          />
          <Skill
            title="Android"
            abstract="A simple app to show a list of character of Harry Potter"
            projectLink="https://github.com/vandaimer/hpcards"
          />
        </div>
      </div>
    );
  }
}

export default App;
