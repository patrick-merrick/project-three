import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import API from "../../utils/API";
// import SearchDeveloper from "../../components/SearchDeveloper/SearchDeveloper";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Developer Profile"
          // image={props.profilePicture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {props.firstName} {props.lastName}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="h2">
            {props.city}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="h2">
            {props.headline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.summary}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="h3">
            {props.skill1},
            {props.skill2},
            {props.skill3}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        {props.email}
        </Button>
      </CardActions>
    </Card>
  );
}
