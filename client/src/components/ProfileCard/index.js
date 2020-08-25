import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Developer Profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Developer Name
          </Typography>
          <Typography variant="body2" color="textPrimary" component="h2">
            MERN, Javascript, SQL
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Hello, I am a new developer looking for more experience 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary">
          GitHub
        </Button>
        <Button size="small" color="primary">
          LinkedIN
        </Button>
        <Button size="small" color="primary">
          Email
        </Button>
      </CardActions>
    </Card>
  );
}