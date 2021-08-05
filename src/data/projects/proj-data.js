import peaky from '../../peakycopy.png'
export const currentProject = [
  {
  name: "Name TBD - Give Me Ideas!",
  compTime: 'In progress',
  teamQuant: 1,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'Cypress', 'React', 'TypeScript', 'Jest'],
  abst: "In the early planning phases of an app to track and submit work orders for Facilities Maintenance teams across multiple sites. Would allow employees to submit work orders and any maintenance techs to see orders across all sites, make notes, view maps, and provide live updates to submitters. Currently in the design/wireframe process.",
  gal: {photos: ["../%PUBLIC_URL%/Peaky-copy.png"], alt: ["../%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: false,
  site: null,
  codeRepo: null
}]

export const projectData = [
  {
  name: "Planet Party",
  compTime: 225,
  teamQuant: 3,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'Cypress', 'React', 'TypeScript'],
  abst: "3rd Place Winner of Turing's Demo Competition. Planet Party is an application designed for kids to learn more about planets in our solar system. We implemented the Solar System OpenData API to display each planet and relevant planet facts. Users have the ability to sort planets by different criteria and click on a planet to view more information. In the single planet view, a user can view different fun facts about the planet compared to Earth and input a weight on Earth to see how it would compare to that planet. We were given 8 days to complete this project while learning and implementing TypeScript from scratch.",
  gal: {photos: ["../%PUBLIC_URL%/Peaky-copy.png"], alt: ["../%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: true,
  site: "https://planet-party.herokuapp.com/",
  codeRepo: "https://github.com/ConnorAndersonLarson/PlanetParty"
},{
  name: "QuickWit",
  compTime: 6,
  teamQuant: 1,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'React'],
  abst: 'QuickWit is a 6 hour challenge to utilize the New York Times API Top Stories API to browse, sort, and investigate stories. The site utilizes React Hooks and React/Router to create a stateless react app. QuickWit is mobile-first and responsive to mobile and desktop views, with hover states on the latter.',
  gal: {photos: [peaky], alt: ["./peakycopy.png"]},
  isDeployed: false,
  site: null,
  codeRepo: "https://github.com/ConnorAndersonLarson/quickwit"
},{
  name: "SlapJack!",
  compTime: 70,
  teamQuant: 1,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'Piskel'],
  abst: 'This was my first ever project! It was a great experience learning Object Oriented Programming and how to structure things as classes that really helped lay the framework for future projects. My personal favorite aspect of this project is the custom background I made (including the pixel cityscape!), I hope to do more of that in the future.',
  gal: {photos: ["%PUBLIC_URL%/Peaky-copy.png"], alt: ["%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: false,
  site: null,
  codeRepo:"https://github.com/ConnorAndersonLarson/SlapJack"
},{
  name: "mealstrike",
  compTime: "10?",
  teamQuant: 1,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'React'],
  abst: 'This is easily the silliest app I have ever made, but also the most shared and utilized app! It simply changes text and allows users to copy it. Every time I think of new ways to change text I add it! Opted for a fun 80s synthwave vibe for the design.',
  gal: {photos: ["%PUBLIC_URL%/Peaky-copy.png"], alt: ["%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: true,
  site: "https://mealstrike.herokuapp.com/",
  codeRepo:"https://github.com/ConnorAndersonLarson/mealstrike"
},{
  name: "AutoScout",
  compTime: 70,
  teamQuant: 1,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'Cypress', 'React'],
  abst: 'I built this because I am an Age of Empires nerd. AutoScout is an app designed to help people view playable civilizations in Age of Empires II easier than the standard in-game UI. It is currently running off the Age of Empires II API to receive civilization data; this data is not currently up to date with most recent game updates. Users of the app are able to view all civilization names and crests on one page. Clicking a civilization crest will then show the basic bonuses and focus of play style. Users can then inspect the selected civ, showing potential civilization matchups that either create a well rounded team (Complimentary) or stack bonuses for a more focused style of play (Stacking). Users can choose to inspect these civilizations as well as favorite the inspected civ from this screen. Favorites are shown on all screens for easy returning to selected civs.',
  gal: {photos: ["%PUBLIC_URL%/Peaky-copy.png"], alt: ["%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: false,
  site: null,
  codeRepo: "https://github.com/ConnorAndersonLarson/AutoScout"
}];
