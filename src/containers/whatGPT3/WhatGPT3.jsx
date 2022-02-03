import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature
          title='What is GPT3'
          text=' 
Sed tristique volutpat lacus sed rhoncus. Sed quis efficitur mauris. Aeneanultricies. '
        />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilites are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature
          title='Chatbox'
          text=' 
          Sed tristique volutpat lacus sed rhoncus. Sed quis efficitur mauris. Aeneanultricies. '
        />
        <Feature
          title='Knowledgebase'
          text=' 
          Sed tristique volutpat lacus sed rhoncus. Sed quis efficitur mauris. Aeneanultricies. '
        />
        <Feature
          title='Education'
          text=' 
          Sed tristique volutpat lacus sed rhoncus. Sed quis efficitur mauris. Aeneanultricies. '
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
