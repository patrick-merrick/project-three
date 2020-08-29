import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
        <Grid>
            <Paper className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <Typography  component="h1" variant="h2" color="textPrimary">
                            Post Ad
                    </Typography>
                    </div>
                    <div >
                        <TextField
                            id="Job Ad Name"
                            label="Enter Job Ad Title"
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            id="outlined-full-width"
                            label="Job Description"
                            style={{ margin: 8 }}
                            placeholder="Placeholder"
                            
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                    </div>
                </form>
            </Paper>
        </Grid>


    );
}