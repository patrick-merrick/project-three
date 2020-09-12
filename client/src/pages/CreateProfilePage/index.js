import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CreateProfile from '../../components/CreateProfile';


function CreateProfilePage() {

  return (
    <Container justify="center" maxWidth="lg">
      <Grid>
        <CreateProfile />
      </Grid>
    </Container>
  );
};

export default CreateProfilePage;

