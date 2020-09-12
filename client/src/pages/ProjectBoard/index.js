import React from 'react';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AdCard from '../../components/AdCard';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from "../../components/Wrapper";
import ads from "../../ads.json";


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
            <Typography align="center" component="h1" variant="h2" color="textPrimary">
                Project Board
            </Typography>
            <br></br>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    
                        <Grid >
                            <Wrapper>
                            <AdCard 
                            adTitle={ads[0].adTitle}
                            adDescription={ads[0].adDescription}
                            adEmail={ads[0].adEmail}
                            />
                            <AdCard 
                            adTitle={ads[1].adTitle}
                            adDescription={ads[1].adDescription}
                            adEmail={ads[1].adEmail}
                            />
                            <AdCard 
                            adTitle={ads[2].adTitle}
                            adDescription={ads[2].adDescription}
                            adEmail={ads[2].adEmail}
                            />
                            
                            <AdCard 
                            adTitle={ads[3].adTitle}
                            adDescription={ads[3].adDescription}
                            adEmail={ads[3].adEmail}
                            />
                            <AdCard 
                            adTitle={ads[4].adTitle}
                            adDescription={ads[4].adDescription}
                            adEmail={ads[4].adEmail}
                            />
                            <AdCard 
                            adTitle={ads[5].adTitle}
                            adDescription={ads[5].adDescription}
                            adEmail={ads[5].adEmail}
                            />
                            </Wrapper>
                        </Grid>
                    
                </Grid>
            </Grid>
        </Container>
    );
}
