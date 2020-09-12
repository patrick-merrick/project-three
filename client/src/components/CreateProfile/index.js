import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import UploadButton from '../UploadButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import ImportButton from '../ImportButton';
import SubmitButton from '../SubmitButton';



import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  }
}));

export default function StateTextFields() {
  const classes = useStyles();

  return (
    <Grid justify="center">
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <br></br>
          <div>
            <Typography component="h1" variant="h2" color="textPrimary">
              Create Profile
            </Typography>
          </div>
          <br></br>
          {/* <div>
            <TextField
              id="Github Input"
              label="Enter Github ID"
              variant="outlined"
            />
            <ImportButton />
          </div> */}
          {/* <br></br>
          <div>
            <TextField
              id="LinkedIn"
              label="Enter LinkedIn"
              variant="outlined"
            />
            <ImportButton />
          </div> */}
          <br></br>
          <div>
            <div>
              <TextField
                id="Name Input"
                label="Enter First Name"
                variant="outlined"
              />
              <TextField
                id="Name Input"
                label="Enter Last Name"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="Location"
                label="Enter Your Location"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="Headline"
                label="Enter Your Headline"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="Skill Input 1"
                label="Enter Skill 1"
                variant="outlined"
              />
              <TextField
                id="Skill Input 2"
                label="Enter Skill 2"
                variant="outlined"
              />
              <TextField
                id="Skill Input 3"
                label="Enter Skill 3"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="Summary"
                label="Summary"
                placeholder="Summary"
                multiline
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="email"
                label="Enter Your Email"
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <UploadButton />
            <Typography variant="body2" color="textPrimary" component="h2">
              Upload a profile photo
            </Typography>
          </div>
          <br></br>
          <div>
            <SubmitButton />
          </div>
        </form>
        <div className={classes.appBarSpacer} />
      </Paper>
    </Grid>


  );
}