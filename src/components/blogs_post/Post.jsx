import React from 'react';
import { Typography, Container, Grid, Button } from '@material-ui/core';
import posts from '../../content/generated/posts.json';
import { Redirect } from 'react-router-dom';
import Markdown from 'react-markdown';
import { makeStyles } from '@material-ui/styles';
import { FollowButton } from '../styled_components/button';

const useStyle = makeStyles((theme) => ({
  articleSection: {
    display: 'block-flex',
    textAlign: 'left',
    width: '70%',
  },
  followButton: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f6f5f5',
      fontWeight: '800',
      boxShadow: '0px 0px 2px rgba(0,0,0,1)',
    },
  },
  infoSection: {
    margin: '1em',
  },
  infoText: {
    color: '#888',
    fontSize: '0.1em',
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
  },
  author: {
    cursor: 'pointer',
    '&:hover': {
      fontWeight: '500',
      textDecoration: 'underline',
    },
  },
  contentSection: {},
}));

export default function Post(props) {
  const classes = useStyle();
  // FIXME: Too much code in a function
  const fetchedPost = {};
  let postExists = false;
  const validPostId = parseInt(props.match.params.id);

  posts.forEach((post, index) => {
    if (validPostId === post.id) {
      fetchedPost.title = post.title ? post.title : null;
      fetchedPost.author = post.author ? post.author : null;
      fetchedPost.date = post.date ? post.date : null;
      fetchedPost.readtime = post.readtime ? post.readtime : null;
      fetchedPost.image = post.image ? post.image : null;
      fetchedPost.point = post.point ? post.point : null;
      fetchedPost.content = post.content ? post.content : null;
      postExists = true;
    }
  });
  if (!postExists) {
    return <Redirect to='/404' />;
  }
  if (!validPostId) {
    return <Redirect to='/404' />;
  }
  return (
    <Container className={classes.articleSection}>
      <Typography variant='h3'>{fetchedPost.title}</Typography>
      <div className={classes.infoSection}>
        <div className={classes.infoText}>
          <div className={classes.authorSection}>
            <div>
              <Typography className={classes.author} variant='caption'>
                {fetchedPost.author}
              </Typography>
            </div>
            <div>
              <FollowButton
                className={classes.followButton}
                variant='outlinedPrimary'
              >
                Follow
              </FollowButton>
            </div>
          </div>
          <Typography className={classes.authorSection} variant='caption'>
            {fetchedPost.date} － {fetchedPost.readtime} Min Read
          </Typography>
        </div>
      </div>
      <article>
        <Markdown source={fetchedPost.content} escapeHtml={false} />
      </article>
    </Container>
  );
}
