import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
// FIXME: unresponsive
const useStyle = makeStyles((theme) => ({
  votingButton: {
    height: '36px',
    display: 'inline',
    fontSize: '12px',
    border: '0.1em solid #333',
    padding: '0.5em',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#fff9f2',
    },
  },
}));
export default function VotingButton(props) {
  const classes = useStyle();
  return (
    <Button className={classes.votingButton}>
      {props.icon ? props.icon : null} {props.title}
    </Button>
  );
}
