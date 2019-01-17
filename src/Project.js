import React, { Component } from 'react';
import './project.scss';

// Array of Projects
const projectArray = [
  {
    title: 'Pasta Bake (TM)',
    alt: 'Pasta Bake (TM)',
    image: require('./images/projects/pasta-bake_2.png'),
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  },
  {
    title: 'Pasta Bake (TM)',
    alt: 'Pasta Bake (TM)',
    image: require('./images/projects/pasta-bake_2.png'),
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  }
];

// TODO: loop through bullets and populate <ul> on line 45
const bulletPoints = projectArray.map(function(item) {
  return <li>some text</li>;
});

const projectObjects = projectArray.map(function(item) {
  return (
    <div className='project'>
      <span className='title'>{item.title}</span>
      <a
        className='image-container'
        href='https://gaddes.github.io/PastaBake/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='image' src={item.image} alt={item.alt} />
      </a>
      <ul className='bullets'>
        {/* <li>{...item.bullets}</li> */}
        <li>{item.bullets[0]}</li>
        <li>{item.bullets[1]}</li>
        <li>{item.bullets[2]}</li>
      </ul>
    </div>
  );
});

export default class Project extends Component {
  render() {
    return <div className='projects'>{projectObjects}</div>;
  }
}
