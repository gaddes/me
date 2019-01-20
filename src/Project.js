import React, { Component } from 'react';
import './project.scss';

// Array of Projects
const projectArray = [
  {
    title: 'Pasta Bake (TM)',
    alt: 'Pasta Bake (TM)',
    url: 'https://gaddes.github.io/PastaBake/',
    image: require('./images/projects/pasta-bake.png'),
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  },
  {
    title: 'Meldon Xmas',
    alt: 'Meldon Xmas',
    url: 'https://meldon-xmas.herokuapp.com/',
    image: require('./images/projects/meldon-xmas.png'),
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  },
  {
    title: 'Matchless Design',
    alt: 'Matchless Design',
    url: 'http://matchlessdesign.co.uk/',
    image: require('./images/projects/matchless-design.png'),
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      'Due to licensing issues, images in the gallery have been intentionally left blank'
    ]
  },
  {
    title: 'Coffee Companion',
    alt: 'Coffee Companion',
    url: '',
    image: require('./images/projects/coffee-companion.png'),
    video: require('./images/projects/coffee-companion.mp4'),
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
  // Only show video if it exists
  let videoPath;
  if (item.video) {
    videoPath = (
      <video className='video' loop src={item.video} autoPlay muted />
    );
  }

  // Show <a> if there's an href, otherwise show <span>
  let imagePath;
  if (item.url) {
    imagePath = (
      <a
        className='image-container'
        href={item.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='image' src={item.image} alt={item.alt} />
      </a>
    );
  } else {
    imagePath = (
      <span
        className='image-container'
        href={item.url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img className='image' src={item.image} alt={item.alt} />
      </span>
    );
  }

  return (
    <div className='project'>
      <span className='title'>{item.title}</span>
      <div className='media-container'>
        {imagePath}
        {videoPath}
      </div>
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
