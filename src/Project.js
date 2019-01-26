import React, { Component } from 'react';
import './project.scss';

// Array of Projects
const projectArray = [
  {
    id: 1,
    title: 'Pasta Bake (TM)',
    alt: 'Pasta Bake (TM)',
    url: 'https://gaddes.github.io/PastaBake/',
    image: require('./images/projects/pasta-bake.png'),
    portrait: false,
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  },
  {
    id: 2,
    title: 'Meldon Xmas',
    alt: 'Meldon Xmas',
    url: 'https://meldon-xmas.herokuapp.com/',
    image: require('./images/projects/meldon-xmas.png'),
    portrait: false,
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  },
  {
    id: 3,
    title: 'Matchless Design',
    alt: 'Matchless Design',
    url: 'http://matchlessdesign.co.uk/',
    image: require('./images/projects/matchless-design.png'),
    portrait: false,
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      'Due to licensing issues, images in the gallery have been intentionally left blank'
    ]
  },
  {
    id: 4,
    title: 'Coffee Companion',
    alt: 'Coffee Companion',
    // url: '',
    image: require('./images/projects/coffee-companion.png'),
    video: require('./images/projects/coffee-companion.mp4'),
    portrait: true,
    bullets: [
      'this website is great because...',
      'it also includes this technology...',
      "here's a third bullet point just for the craic..."
    ]
  }
];

const projectObjects = projectArray.map(function(item) {

  // Create title element
  let title;
  if (item.title) {
    title = (
      <span className='title'>{item.title}</span>
    );
  }

  // Only show video if it exists
  let videoPath;
  if (item.video) {
    if (item.portrait === true) {
      videoPath = (
        <div className='video-container -portrait'>
          <video className='video' loop src={item.video} autoPlay muted />
        </div>
      );
    } else {
      videoPath = (
        <div className='video-container'>
          <video className='video' loop src={item.video} autoPlay muted />
        </div>
      );
    }
  }

  // Show <a> if there's an href, otherwise show <span>
  let imagePath;
  if (item.url) {
    if (item.portrait === true) {
      imagePath = (
        <a
          className='image-container -portrait'
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='image' src={item.image} alt={item.alt} />
        </a>
      );
    } else {
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
    }
  } else {
    if (item.portrait === true) {
      imagePath = (
        <div className='image-container -portrait'>
          <img className='image' src={item.image} alt={item.alt} />
        </div>
      );
    } else {
      imagePath = (
        <div className='image-container'>
          <img className='image' src={item.image} alt={item.alt} />
        </div>
      );
    }
  }

  // Show all bullet points (if they exist)
  let bulletPoints;
  // Check item has bullets
  if (item.bullets) {
    // Loop through bullets, add each one to array as a <li> item
    const bulletsArray = item.bullets.map((bullet, index) =>
      <li key={`bullet-${index + 1}`}>{bullet}</li>
    );
    bulletPoints = (
      <ul className='bullets'>
        {bulletsArray}
      </ul>
    );
  }

  return (
    <div className='project' key={`project-${item.id}`}>
      {title}
      <div className='media-container'>
        {imagePath}
        {videoPath}
      </div>
      {bulletPoints}
    </div>
  );
});

export default class Project extends Component {
  render() {
    return <div className='projects'>{projectObjects}</div>;
  }
}
