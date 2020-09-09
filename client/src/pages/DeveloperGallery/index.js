import React from "react";
import Container from "@material-ui/core/Container";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProfileCard from "../../components/ProfileCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Container className={classes.root} spacing={2}>
      <br></br>
      <Typography
        align="center"
        component="h1"
        variant="h2"
        color="textPrimary"
      >
        Developer Gallery
      </Typography>
      <br></br>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} item>
              <ProfileCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
