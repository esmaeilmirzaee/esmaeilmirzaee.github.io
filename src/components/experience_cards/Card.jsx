import React from 'react';

import { Container, Typography } from '@material-ui/core';

function Card(props) {
  const subtitleIcons = props.mainSubtitle;
  return (
    <Container className='card' style={{ margin: '1em' }}>
      <span className='icon'>{props.icon}</span>
      <Typography variant='h5'>{props.title}</Typography>
      <Typography style={{ paddingTop: '3em' }} variant='body2'>
        {props.subtitle}
      </Typography>
      <Typography style={{ paddingTop: '1em' }} variant='body1'>
        {props.mainTitle}
      </Typography>
      {/* mainSubtitle -- icon */}
      {subtitleIcons.map((icon) => icon.icon_name)}
      {/* bodyTitle is empty */}
      {/* bodySubtitle is empty */}
      <Typography style={{ paddingTop: '2.5em' }}>{props.footTitle}</Typography>
      {/* footSubtitle -- icon */}
      {props.footSubtitle.map((icon) => icon.icon_name)}
    </Container>
  );
}

export default Card;
