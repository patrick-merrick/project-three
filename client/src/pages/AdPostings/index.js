import React from 'react';
import Container from '@material-ui/core/Container';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AdCard from '../../components/AdCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));



function AdPostingsPage() {
    const classes = useStyles();
    return (
        <Container justify="center" maxWidth="lg">
            <Typography align="center" component="h1" variant="h2" color="textPrimary">
                Ad Postings
            </Typography>
            <br></br>
            <Grid justify="center" container spacing={4}>
                <Grid align="center" xs={12} sm={6} md={4} >

                    <AdCard />

                </Grid>
                <Grid align="center" xs={12} sm={6} md={4}>

                    <AdCard />

                </Grid>
            </Grid>
        </Container>
    );
}

export default AdPostingsPage;