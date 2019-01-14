import React, { Component } from 'react';
import './techItem.scss';

// array of objects
const techArray = [
  {
    alt: 'react logo',
    logo: require('./images/logo_react.png'),
    title: 'React',
    description: `I'm learning to use React alongside JavaScript to assist with the quick and easy creation of interactive UIs.`
  },
  {
    alt: 'sass logo',
    logo: require('./images/logo_sass.png'),
    title: 'Sass',
    description: `I use CSS and SASS wherever possible to bring my designs to life!`
  },
  {
    alt: 'html logo',
    logo: require('./images/logo_html.png'),
    title: 'HTML5',
    description: `The stalwart of web development; what more can I say!`
  },
  {
    alt: 'css logo',
    logo: require('./images/logo_css.png'),
    title: 'CSS3',
    description: `I use CSS and SASS wherever possible to bring my designs to life!`
  },
  {
    alt: 'bootstrap logo',
    logo: require('./images/logo_bootstrap.png'),
    title: 'Bootstrap',
    description: `Bootstrap is a fantastic framework for quickly creating new projects whilst ensuring a clean and consistent layout. Easily modified with CSS to ensure each project is handcrafted and unique!`
  },
  {
    alt: 'javascript logo',
    logo: require('./images/logo_js.png'),
    title: 'JavaScript',
    description: `JavaScript is used on all my projects to add interactivity and functionality - with JavaScript, anything is possible!`
  },
  {
    alt: 'terminal logo',
    logo: require('./images/logo_terminal.png'),
    title: 'Bash/NPM/Webpack',
    description: `I use Bash to install and run packages via NPM, and scripts to automate repetitive tasks. This ensures my workflow is efficient and productive, giving me maximum time to design layouts and write code to support new features.`
  },
  {
    alt: 'git logo',
    logo: require('./images/logo_github.png'),
    title: 'Git, GitHub & SVN',
    description: `I use Git or SVN on all projects for version control and sharing code.`
  }
];

const techObjects = techArray.map(function(item) {
  return (
    <div className='item'>
      <div className='logo-container'>
        <img className='logo' src={item.logo} alt={item.alt} />
      </div>
      <span className='heading'>{item.title}</span>
      <span className='description'>{item.description}</span>
    </div>
  );
});

export default class TechItem extends Component {
  render() {
    return <div className='items'>{techObjects}</div>;
  }
}
