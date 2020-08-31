import React from 'react';

import { FaGitlab, FaGoogle, FaStackOverflow, FaGithub } from 'react-icons/fa';

import Container from '@material-ui/core/Container';

function SocialNetwork() {
  return (
    <div className='container'>
      <Container className='icons'>
        <FaGitlab className='icon' />
        <FaGithub className='icon' />
        <FaGoogle className='icon' />
        <FaStackOverflow className='icon' />
      </Container>
    </div>
  );
}

export default SocialNetwork;
