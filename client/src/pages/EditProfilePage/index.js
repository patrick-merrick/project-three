import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import EditProfile from '../../components/EditProfile';


function EditProfilePage() {

  return (
    <Container justify="center" maxWidth="lg">
      <Grid>
        <EditProfile />
      </Grid>
    </Container>
  );
};

export default EditProfilePage;

