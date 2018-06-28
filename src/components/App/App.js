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
        <div className={classes.container}>
          {projects && projects.map((project, index) => (
            <span key={index} className={classes.item}>
              <Skill
                title={project.title}
                abstract={project.abstract}
                projectLink={project.link}
              />
            </span>
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
  container: {
    fontSize: 'large',
    background: 'linear-gradient(#185f9b, #91c5f2)',
    padding: 16,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    flex:'50%',
  }
};

export default withStyles(styles)(App);
