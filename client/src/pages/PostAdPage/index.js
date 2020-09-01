import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PostAd from '../../components/PostAd';
import Typography from '@material-ui/core/Typography';


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