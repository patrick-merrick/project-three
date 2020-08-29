import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EditProfile from '../../components/EditProfile';
import Typography from '@material-ui/core/Typography';


function EditProfilePage() {

  return (
    <Container justify="center" maxWidth="lg">
      <Grid>
      <Typography align="center" component="h1" variant="h2" color="textPrimary">
            Developer Gallery
            </Typography>
        <EditProfile/>
      </Grid>
    </Container>
  );
};

export default EditProfilePage;

