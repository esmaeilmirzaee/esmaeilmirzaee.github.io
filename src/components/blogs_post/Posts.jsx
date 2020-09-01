import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Markdown from 'react-markdown';

import allRecentPosts from '../../content/generated/posts.json';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  info: {
    display: 'inline-block',
  },
  dateInfo: {
    color: '#aaa',
  },
  authorInfo: {
    color: '#777',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: '#333',
    },
  },
  post: {
    margin: '1em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}));

const Posts = () => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Grid container direction='column' sm={12} spacing={2}>
        <Typography>All recent posts</Typography>
        {allRecentPosts.length &&
          allRecentPosts.map((post, index) => {
            return (
              <Grid
                item
                className={classes.post}
                key={index}
                sm={12}
                spacing={3}
              >
                <Typography
                  variant='h6'
                  className={classes.title}
                  component={Link}
                  to={`/post/:${post.id}`}
                >
                  {post.title}
                </Typography>
                <Typography
                  className={classes.point}
                  variant='body2'
                  display='block'
                  gutterBottom
                >
                  {post.point}
                </Typography>
                <div className={classes.info}>
                  <Typography
                    className={classes.authorInfo}
                    component={Link}
                    to={`/author/${post.author_id}`}
                    variant='overline'
                  >
                    {post.author}{' '}
                  </Typography>
                  <Typography className={classes.dateInfo} variant='caption'>
                    {post.date}{' '}
                    {post.readtime && ' · ' + post.readtime + ' Min to read'}
                  </Typography>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Posts;
