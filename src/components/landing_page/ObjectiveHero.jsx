import React from 'react';
import { Typography } from '@material-ui/core';

function ObjectiveHero() {
  return (
    <div className='objective'>
      <div className='objective__card'>
        <h4 className='objective__title font-black'>
          Hi, I'm <em>Esmaeil MIRZAEE</em>. Enchanté.
        </h4>
        <p
          className='objective__body'
          align='justify'
          color='textPrimary'
          paragraph='true'
        >
          I started my journey in the field of computer and electrical
          engineering as a network engineer, which I continued the job title for
          five years. Then I continued my job as a Linux administrator for the
          next three years. During those years as an engineer or administrator,
          I challenged every technology behind each device I used. So, being
          curious enough and having an innovative mindset, I moved to the next
          epic in my life<span>&#x2014;</span>I started to educate myself
          programming languages. Consequently, my journey initiated as a
          developer. I thought myself how to use HTML, CSS and JavaScript. Next,
          I leverage Java and Spring framework to develop backend services.
          Finally, I started to leverage ReactJS in my projects.
        </p>
      </div>
    </div>
  );
}

export default ObjectiveHero;
