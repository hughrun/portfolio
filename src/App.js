import React, { Component } from 'react';
import {v4} from 'uuid';
// import logo from './logo.svg';
import './App.css';

const projects = {apps:
  [
    {
      id: v4(),
  		name: "Portfolio",
      type: "app",
  		description: "You're looking at it.",
  		github: "https://github.com/hughrun/portfolio",
  		demo: "https://code.hughrundle.net",
  		languages: ["JS", "CSS"],
  		frameworks: ["React"],
  		ops: ["nginx"],
  		released: new Date(2018, 3, 5)
  	},
    {
      id: v4(),
  		name: "Community Tweets",
      type: "app",
  		description: "Gathers blog RSS feeds via a Meteor site and tweets links when a post is published",
  		github: "https://github.com/hughrun/communitytweets",
  		demo: "https://glamblogs.newcardigan.org",
  		languages: ["JS", "CSS", "HTML"],
  		frameworks: ["Meteor"],
  		ops: ["nginx", "MongoDB", "Docker"],
  		released: new Date(2015, 11, 19)
  	},
    {
      id: v4(),
  		name: "cardipress",
      type: "theme",
  		description: "A blog theme for WordPress. Uses CSS Grid and custom WordPress hooks.",
  		github: "https://github.com/hughrun/cardipress",
  		demo: "https://newcardigan.org",
  		languages: ["CSS", "JS", "PHP"],
  		frameworks: ["WordPress"],
  		ops: ["nginx"],
  		released: new Date(2017, 10, 3)
  	},
    {
      id: v4(),
  		name: "hacker_grid",
      type: "theme",
  		description: "A blog theme for Ghost. Uses CSS Grid, as well as some of the newer Ghost API functionality.",
  		github: "https://github.com/hughrun/hacker_grid",
  		demo: "https://www.hughrundle.net",
  		languages: ["HTML", "CSS"],
  		frameworks: ["Ghost", "handlebars"],
  		ops: ["Ghost CLI"],
  		released: new Date(2018, 0, 25)
  	},
    {
      id: v4(),
  		name: "Empocketer",
      type: "app",
  		description: "An Express app for piping RSS feeds into Pocket accounts.",
  		github: "https://github.com/hughrun/empocketer",
  		demo: "https://empocketer.hugh.li",
  		languages: ["JS", "HTML", "CSS"],
  		frameworks: ["nodejs", "Express"],
  		ops: ["nginx"],
  		released: new Date(2018, 1, 8)
  	},
    {
      id: v4(),
  		name: "Cardigan",
      type: "theme",
  		description: "A Ghost theme made for the newCardigan website. No longer in use.",
  		github: "https://github.com/hughrun/cardigan",
  		demo: "https://github.com/hughrun/cardigan",
  		languages: ["CSS", "HTML", "JS"],
  		frameworks: ["Ghost", "handlebars"],
  		ops: [],
  		released: new Date(2016, 9, 2)
  	},
    {
      id: v4(),
  		name: "ghost-to-wp",
      type: "script",
  		description: "A nodejs script to migrate Ghost blogs to WordPress.",
  		github: "https://github.com/hughrun/ghost-to-wp",
  		demo: "https://github.com/hughrun/ghost-to-wp",
  		languages: ["JS"],
  		frameworks: ["nodejs"],
  		ops: [],
  		released: new Date(2017, 9, 21)
  	},
    {
      id: v4(),
  		name: "Lollipop",
      type: "theme",
  		description: "A Ghost theme, formerly used on my blog. It's, uh, not for everyone...",
  		github: "https://github.com/hughrun/lollipop",
  		demo: "https://github.com/hughrun/lollipop",
  		languages: ["CSS", "HTML"],
  		frameworks: ["Ghost"],
  		ops: [],
  		released: new Date(2017, 0, 1)
  	},
  	{
      id: v4(),
  		name: "@recipe_trove",
      type: "bot",
  		description: "A Twitter bot that takes a query and responds with a recipe from the National Library of Australia's newspaper archive.",
  		github: "https://github.com/hughrun/recipe_trove",
  		demo: "https://twitter.com/recipe_trove",
  		languages: ["JS"],
  		frameworks: ["nodejs"],
  		ops: ["Docker"],
  		released: new Date(2016, 2, 5)
  	},
    {
      id: v4(),
  		name: "Tinfoil",
      type: "app",
  		description: "Proof-of-concept for a client-side encrypted library circulation system using Meteor and Mylar",
  		github: "https://github.com/hughrun/tinfoil",
  		demo: "https://tinfoil.hugh.li",
  		languages: ["JS", "CSS", "HTML"],
  		frameworks: ["Meteor", "Mylar"],
  		ops: ["nginx", "MongoDB", "Docker"],
  		released: new Date(2016, 6, 3)
  	},
    {
      id: v4(),
  		name: "@RijksTeenPress",
      type: "bot",
  		description: "Takes a random title from the Teen Vogue rss feed, and pairs it with an image from the Rijksmuseum API",
  		github: "https://github.com/hughrun/rijks-teen-press",
  		demo: "https://twitter.com/RijksTeenPress",
  		languages: ["JS"],
  		frameworks: ["nodejs"],
  		ops: ["Docker"],
  		released: new Date(2016, 11, 31)
  	},
    {
      id: v4(),
  		name: "@opileaks",
      type: "bot",
  		description: "A ridiculous Twitter bot that reports fake leaks in response to fake Border Force operations",
  		github: "https://github.com/hughrun/operation-response",
  		demo: "https://twitter.com/opileaks",
  		languages: ["JS"],
  		frameworks: ["nodejs"],
  		ops: ["docker", "nginx"],
  		released: new Date(2016, 2, 5)
  	}
  ],
  sort_by: "SORT_BY_TITLE"
};

const intro = {
  heading: "Hi there",
  description:[
    "I'm Hugh - librarian and coder.",
    "I've used HTML, CSS, and a range of modern JavaScript frameworks and libraries including nodejs, Meteor, jQuery and React. Several of my projects interact with various APIs. I also have some experience with Git, Docker, nginx, MongoDB, MySQL, Systemd and basic Linux administration. In an emergency I could put together a simple bash script and maybe find the bug in your WordPress theme.", "This site is very much a work in progress!", <span>Check out some of the projects I've been working on below, and <a href="mailto:code@hughrundle.net">get in touch</a> if you think we'd work well together.</span>, <span>To find out more check out <a href="https://www.hughrundle.net">www.hughrundle.net</a></span>
  ]
}

const Framework = ({fr, onChooseFramework=f=>f}) =>
    <span className={`framework ${fr}`} onClick={onChooseFramework}>
      {fr}
    </span>

const Frameworks = ({frameworks, id, onChooseFramework=f=>f}) =>
  <div className="frameworks">
    {frameworks.map( (f) =>
      <Framework
        fr={f}
        onChooseFramework={onChooseFramework}
        key={`${id}-${f.toLowerCase()}`}
      />
    )}
  </div>

const Op = ({op, onChooseOps=f=>f}) =>
  <span
    className={`op ${op.toLowerCase()}`}
    onClick={onChooseOps}
  >
    {op}
  </span>

const Ops = ({ops, id, onChooseOps=f=>f}) =>
  <div className='ops'>
    {ops.map((op) =>
    <Op
      op={op}
      onChooseOps={onChooseOps}
      key={`${id}-${op.toLowerCase()}`}
    />
  )}
  </div>

const Languages = ({languages, id, onChooseLanguage=f=>f}) =>
  <div className='languages'>
    {languages.map((lang, i) =>
      <span
        className={`code-lang ${lang.toLowerCase()}`}
        onClick={onChooseLanguage}
        key={`${id}-${lang.toLowerCase()}`}
      >
        {lang}
      </span>
    )}
  </div>

const Released = ({released}) =>
  <div className='released'>
    First commit: {released.toDateString()}
    </div>

const Listing = ({apps=[], onChooseFramework=f=>f, onChooseLanguage=f=>f, onChooseOps=f=>f}) =>
  apps.map(project =>
      <section className='project' key={project.name.toLowerCase().replace(' ', '_')}>
        <h2 className={`${project.type}`}>{project.name}</h2>
        <div className='project-details'>
          <p>{project.description}</p>
          <span><a href={project.github}><img className='github' alt="GitHub logo" src='github.svg'/></a></span>
          <span><a href={project.demo}><img className='demo' alt="link symbol" src='green-link.svg'/></a></span>
          <div>
          <Ops
          {...project}
          onChooseOps={onChooseOps}
          id={project.id}
          />
          <Frameworks
          {...project}
          onChooseFramework={onChooseFramework}
          id={project.id}
          />
          </div>
          <Languages
            {...project}
            onChooseLanguage={onChooseLanguage}
            id={project.id}
          />
          <Released
          {...project}
          />
        </div>
      </section>
)

const Footer = ({link, text}) =>
    <div className="credits">
      <div>Background photo by <a href={link}>{text}</a>, GitHub icon via <a href="https://simpleicons.org/">Simple Icons</a>. Link icon via the Noun Project.</div>
      <div>Everything else &copy; Hugh Rundle</div>
    </div>

const Intro = ({heading, description, onChooseOrder=f=>f}) =>
<div className="intro-text">
  <h1>{heading}</h1>
  <section>
  {description.map( (p) =>
    <p key={v4()}>
    {p}
    </p>
  )}
  </section>
</div>

class ProjectsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      apps: projects.apps
    }
    this.displayByFramework = this.displayByFramework.bind(this)
    this.displayByLanguage = this.displayByLanguage.bind(this)
    this.displayByOps = this.displayByOps.bind(this)
  }

  displayByFramework({target}) {
    const apps = projects.apps.filter( (proj) => proj.frameworks.includes(target.textContent));
    apps.sort_by === 'SORT_BY_DATE' ?
      apps.sort( function(a, b) {
        return a.released > b.released
      })
    : apps.sort( function(a, b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        } else {
          return 1
        }
      })
    this.setState({apps})
  }

  displayByLanguage({target}) {
    const apps = projects.apps.filter( (proj) => proj.languages.includes(target.textContent));
    apps.sort_by === 'SORT_BY_DATE' ?
      apps.sort( function(a, b) {
        return a.released > b.released
      })
    : apps.sort( function(a, b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        } else {
          return 1
        }
      })
    this.setState({apps})
  }

  displayByOps({target}) {
    const apps = projects.apps.filter( (proj) => proj.ops.includes(target.textContent)).sort();
    apps.sort_by === 'SORT_BY_DATE' ?
      apps.sort( function(a, b) {
        return a.released > b.released
      })
    : apps.sort( function(a, b) {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
          return -1
        } else {
          return 1
        }
      })
    this.setState({apps})
  }

	render() {
    const {displayByFramework, displayByLanguage, displayByOps} = this;
    const {apps} = this.state;
    return (
      <div id="projects">
        <Intro
        {...intro}
        />
        <Listing
          apps={apps}
          onChooseFramework={displayByFramework}
          onChooseLanguage={displayByLanguage}
          onChooseOps={displayByOps}
        />
        <Footer
          link="https://unsplash.com/photos/HyoRyMAVpNA"
          text="Jess Watters on Unsplash"
        />
      </div>
    )
	}
}

export default ProjectsList;
