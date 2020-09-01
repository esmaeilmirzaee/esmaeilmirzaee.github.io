import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import Markdown from 'react-markdown';

import allRecentPosts from '../../content/generated/posts.json';

const Posts = () => {
  return (
    <Grid container direction='row'>
      <Grid>
        {allRecentPosts.length &&
          allRecentPosts.map((post, index) => {
            return (
              <div key={index}>
                <Typography>All recent posts</Typography>
                <Markdown source={post} />
              </div>
            );
          })}
      </Grid>
    </Grid>
  );
};

export default Posts;
