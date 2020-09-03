import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PostAd from '../../components/PostAd';


function PostAdPage() {

  return (
    <Container justify="center" maxWidth="lg">
      <Grid>
        <PostAd/>
      </Grid>
    </Container>
  );
};

export default PostAdPage;