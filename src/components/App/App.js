import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { storage } from '../../config';
import Skill from '../Skill';

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
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <header className={classes.header}>
          <h1 className={classes.title}>Luiz Filipe's Portifolio</h1>
          <h1 className={classes.title}>Full-Stack Software Developer</h1>
        </header>
        <div className={classes.intro}>
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

const styles = {
  app: {
    textAlign: 'center',
    backgroundColor: '#185f9b',
  },
  header: {
    height: 300,
    padding: 20,
    color: 'white',
  },
  title: {
    fontSize: '1.5em',
  },
  intro: {
    fontSize: 'large',
    background: 'linear-gradient(#185f9b, #91c5f2)',
    padding: 16,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  }
};

export default withStyles(styles)(App);
