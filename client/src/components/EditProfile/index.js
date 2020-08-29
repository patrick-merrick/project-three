import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import UploadButton from '../UploadButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function StateTextFields() {
  const classes = useStyles();
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Grid justify="center">
      <Paper className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <Typography align="center" component="h1" variant="h2" color="textPrimary">
              Edit Profile
            </Typography>
            <Typography  align="center"variant="body2" color="textPrimary" component="h2">
              Picture can be imported from GitHub or Linked in, or manually
            </Typography>
          </div>
          <div >
            <UploadButton />
            <TextField
              id="Name Input"
              label="Enter Name"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              id="Skill Input 1"
              label="Enter Skill"
              variant="outlined"
            />
            <TextField
              id="Skill Input 2"
              label="Enter Skill"
              variant="outlined"
            />
            <TextField
              id="Skill Input 3"
              label="Enter Skill"
              variant="outlined"
            />
            <TextField
              id="Skill Input 4"
              label="Enter Skill"
              variant="outlined"
            />
          </div>
          <div>
            <TextField fullWidth
              id="Developer Description"
              label="Enter a description"
              defaultValue=""
              variant="outlined"
            />
          </div>
        </form>
      </Paper>
    </Grid>


  );
}