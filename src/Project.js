import React, { Component } from 'react';
import './project.scss';

// Array of Projects
const projectArray = [
  {
    id: 1,
    title: `Pasta Bake (TM)`,
    alt: `Pasta Bake (TM)`,
    url: `https://gaddes.github.io/PastaBake/`,
    image: require(`./images/projects/pasta-bake.png`),
    portrait: false,
    bullets: [
      `The official website for the number one independently-owned Pasta Bake appreciation page`,
      `One of my first websites, this was built in plain HTML and CSS`,
      `The header is fully responsive and its height reduces as the user scrolls down the page`
    ]
  },
  {
    id: 2,
    title: `Meldon Xmas`,
    alt: `Meldon Xmas`,
    url: `https://meldon-xmas.herokuapp.com/`,
    image: require(`./images/projects/meldon-xmas.png`),
    portrait: false,
    bullets: [
      `A single-page application built on Node.js`,
      `This app uses mongoose to define schemas for MongoDB`,
      `We used this to add and remove items from our Christmas shopping list!`
    ]
  },
  {
    id: 3,
    title: `Matchless Design`,
    alt: `Matchless Design`,
    url: `http://matchlessdesign.co.uk/`,
    image: require(`./images/projects/matchless-design.png`),
    portrait: false,
    bullets: [
      `The client for this piece of work is an engineering consultant`,
      `This website was used to showcase the client's broad range of capabilities within the mechanical engineering sector`,
      `Still awaiting final copy and, due to licensing issues, images in the gallery have been intentionally left blank`
    ]
  },
  {
    id: 4,
    title: `YogaTimer`,
    alt: `Yoga Timer`,
    url: `https://www.yogatimer.co.uk/`,
    image: require(`./images/projects/yoga-timer.png`),
    portrait: false,
    bullets: [
      `This app allows the user to select a time range and number of loops`,
      `It will play a gentle sound at the end of each loop`,
      `Perfect for gym-goers or yoga enthusiasts!`
    ]
  },
  {
    id: 5,
    title: `Coffee Companion`,
    alt: `Coffee Companion`,
    image: require(`./images/projects/coffee-companion.png`),
    video: require(`./images/projects/coffee-companion.mp4`),
    portrait: true,
    bullets: [
      `A companion app for the Nespresso range of coffee machines, written in Swift`,
      `Track the number of coffee pods remaining, check 'on' or 'off' using the hamburger menu`,
      `Built exclusively for iOS, with a responsive layout that adapts to any size device`
    ]
  }
];

// TODO: populate this array and then extract into a new component (Tutorials.js)
// Array of tutorials
// eslint-disable-next-line
const tutorialArray = [
  {
    id: 1,
    title: `Matchless Design`,
    alt: `Matchless Design`,
    url: `http://matchlessdesign.co.uk/`,
    image: require(`./images/projects/matchless-design.png`),
    portrait: false,
    bullets: [
      `The client for this piece of work is an engineering consultant`,
      `This website was used to showcase the client's broad range of capabilities within the mechanical engineering sector`,
      `Still awaiting final copy and, due to licensing issues, images in the gallery have been intentionally left blank`
    ]
  },
];

const projectObjects = projectArray.map(function(item) {

  // Create title element
  let title;
  if (item.title) {
    title = (
      <span className='title'>{item.title}</span>
    );
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

  // Only show video if it exists
  let videoPath;
  if (item.video) {
    /*
     * Only render video on page load if the screen width exceeds 768px
     * Note: this corresponds to $breakpoint-medium defined in _variables.scss
    */
    if (window.innerWidth >= 768) {
      if (item.portrait === true) {
        videoPath = (
          <div className='video-container -portrait'>
            <video className='video' loop src={item.video} autoPlay muted controls />
          </div>
        );
      } else {
        videoPath = (
          <div className='video-container'>
            <video className='video' loop src={item.video} autoPlay muted controls />
          </div>
        );
      }
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
      <div className='project__hero'>
        {title}
        <div className='media-container'>
          {imagePath}
          {videoPath}
        </div>
      </div>
      <div className='project__description'>
        {bulletPoints}
      </div>
    </div>
  );
});

export default class Project extends Component {
  render() {
    return <div className='projects'>{projectObjects}</div>;
  }
}
