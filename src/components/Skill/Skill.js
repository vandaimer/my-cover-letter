import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export const Skill = props => {
  const { classes, title, abstract, image, projectLink } = props;

  return(
    <Card className={classes.card}>
      {image &&
        <CardMedia
          className={classes.media}
          image={image}
          title=""
        />
      }
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {title}
        </Typography>
        <Typography component="p">
          {abstract}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={projectLink} disabled={!projectLink}>
          See the README
        </Button>
      </CardActions>
    </Card>
  );
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  image: PropTypes.string,
}

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

export default withStyles(styles)(Skill);
