import React from "react";
import Container from "@material-ui/core/Container";
// import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ProfileCard from "../../components/ProfileCard";
import Wrapper from "../../components/Wrapper";

import { makeStyles } from "@material-ui/core/styles";
import profiles from "../../profiles.json";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(6),
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
          <Grid>
            <Wrapper>
            <ProfileCard
              profilePicture={profiles[0].profilePicture}
              firstName={profiles[0].firstName}
              lastName={profiles[0].lastName}
              city={profiles[0].city}
              headline={profiles[0].headline}
              summary={profiles[0].summary}
              skill1={profiles[0].skill1}
              skill2={profiles[0].skill2}
              skill3={profiles[0].skill3}
              email={profiles[0].email}
            />
            <ProfileCard
              profilePicture={profiles[1].profilePicture}
              firstName={profiles[1].firstName}
              lastName={profiles[1].lastName}
              city={profiles[1].city}
              headline={profiles[1].headline}
              summary={profiles[1].summary}
              skill1={profiles[1].skill1}
              skill2={profiles[1].skill2}
              skill3={profiles[1].skill3}
              email={profiles[1].email}
            />
            <ProfileCard
              profilePicture={profiles[2].profilePicture}
              firstName={profiles[2].firstName}
              lastName={profiles[2].lastName}
              city={profiles[2].city}
              headline={profiles[2].headline}
              summary={profiles[2].summary}
              skill1={profiles[2].skill1}
              skill2={profiles[2].skill2}
              skill3={profiles[2].skill3}
              email={profiles[2].email}
            />
            </Wrapper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}






                  // id={profile.id}
                  // key={profile.id}
                  // profilePicture={profile.profilePicture}
                  // firstName={profile.firstName}
                  // lastName={profile.lastName}
                  // skills={profile.skills}
                  // summary={profile.summary}


                  // {[0, 1, 2].map((value) => (
                  //   <ProfileCard key={value} item
                  //     profilePicture={profiles[0].profilePicture}
                  //     firstName={profiles[0].firstName}
                  //     lastName={profiles[0].lastName}
                  //     city={profiles[0].city}
                  //     headline={profiles[0].headline}
                  //     summary={profiles[0].summary}
                  //     skill1={profiles[0].skill1}
                  //     skill2={profiles[0].skill2}
                  //     skill3={profiles[0].skill3}
                  //     email={profiles[0].email}
                  //   />
                  // ))}