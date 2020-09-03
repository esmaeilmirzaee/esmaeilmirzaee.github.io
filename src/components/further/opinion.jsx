import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import VotingButton from '../styled_components/votingButton';

class Opinion extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    let { count } = this.state;

    return (
      <Grid
        container
        style={{ margin: '1em', textAlign: 'center' }}
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12}>
          <Typography style={{ color: '#444', textAlign: 'center' }}>
            What do you think?
          </Typography>
          <Typography
            variant='caption'
            style={{
              visibility: 'visible',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            {count} response
          </Typography>
        </Grid>
        <Grid container item>
          <Grid
            container
            item
            direction='row'
            spacing={1}
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              marginTop: '1em',
            }}
          >
            <Grid item xs={2}>
              <VotingButton
                icon='👍🏻'
                title=' Upvote'
                action={this.incrementCount}
              />
            </Grid>
            <Grid item xs={2}>
              <VotingButton
                icon='🤪'
                title=' Funny'
                onClick={this.incrementCount}
              />
            </Grid>
            <Grid item xs={2}>
              <VotingButton
                icon='😍'
                title=' Loved'
                onClick={this.incrementCount}
              />
            </Grid>
            <Grid item xs={2}>
              <VotingButton
                icon='😲'
                title=' Surprised'
                onClick={this.incrementCount}
              />
            </Grid>
            <Grid item xs={2}>
              <VotingButton
                icon='😩'
                title=' Sad'
                onClick={this.incrementCount}
              />
            </Grid>
            <Grid item xs={2}>
              <VotingButton
                icon='😖'
                title=' Angry'
                onClick={this.incrementCount}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Opinion;
