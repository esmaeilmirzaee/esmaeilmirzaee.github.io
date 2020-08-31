import React from 'react';
function ProjectCard(props) {
  return (
    <div className='pb__slide__show'>
      <img src={props.card_number} alt='' />
    </div>
  );
}

export default React.memo(ProjectCard);
