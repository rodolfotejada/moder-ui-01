import React from 'react';
import './possibility.css';
import posibilityImage from '../../assets/undraw_real_time_analytics_re_yliv.svg';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={posibilityImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to get started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          From they fine john he give of rich he. They age and draw mrs like.
          Improving end distrusts may instantly was household applauded.
        </p>
        <h4>Request Early Access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
