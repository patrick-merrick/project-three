import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProfileCard from '../../components/ProfileCard';


function DeveloperGalleryPage() {
    
    return (
        
        <Grid justify="center" container spacing={3}>
            <Typography align="center" component="h1" variant="h2" color="textPrimary">
            Developer Gallery
            </Typography>
            <Grid>
                <Paper>
                    <ProfileCard />
                </Paper>
            </Grid>
            <Grid>
                <Paper>
                    <ProfileCard />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default DeveloperGalleryPage;
