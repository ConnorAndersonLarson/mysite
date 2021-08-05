import peaky from '../../peakycopy.png'
export const mainPageTestData = [
  {
  name: "Testy McTestFace 1",
  compTime: 40,
  teamQuant: 2,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'Cypress'],
  abst: 'This project was designed to test the system of my personal website.',
  gal: {photos: ["../%PUBLIC_URL%/Peaky-copy.png"], alt: ["../%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: false,
  site: null
},{
  name: "Testy McTestFace 2",
  compTime: 20,
  teamQuant: 1,
  stack: ['JavaScript', 'CSS3', 'React', 'Cypress'],
  abst: 'This project was also designed to test the system of my personal website.',
  gal: {photos: [peaky], alt: ["./peakycopy.png"]},
  isDeployed: true,
  site: "https://github.com/ConnorAndersonLarson"
},{
  name: "Testy McTestFace 3",
  compTime: 60,
  teamQuant: 3,
  stack: ['JavaScript', 'CSS3', 'HTML5', 'Cypress', 'React', 'Jest'],
  abst: 'This project was totally not designed to test the system of my personal website.',
  gal: {photos: ["%PUBLIC_URL%/Peaky-copy.png"], alt: ["%PUBLIC_URL%/Peaky-copy.png"]},
  isDeployed: false,
  site: null
}];
