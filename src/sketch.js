import perceptron from './components/perceptron/perceptron.js';
import perceptron_2 from './components/perceptron_2/perceptron_2.js';

const ID_COMMON = 'proj';
let name = '';
const objVisor = [
  (p, h) => {
    perceptron(p, h);
  },
  (p, h) => {
    perceptron_2(p, h);
  },
  () => {
     
  },
  () => {
     
  },
  () => {
     
  },
  () => {
     
  },
];

const title = document.getElementById('titleProj');
export const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('.open-proj');
const p5Container = document.getElementById('visor');

const currentActiveButton = () => document.querySelector('button[aria-current="true"]');

buttons.forEach((button) => {
  button.addEventListener('click', function selectProject(e) {
    e.preventDefault();
    const elem = e.target;
    const idNumber = +elem.id.match(/[0-9]/)-1;
    const newTitle = elem.parentElement.firstElementChild.textContent;
    title.innerText = newTitle;

    (function changeCurrent () {
      const currentButton = currentActiveButton();
      if (!!!currentButton.isEqualNode(elem)){
        currentButton.setAttribute('aria-current', 'false');
        elem.setAttribute('aria-current', 'true');
      };
    })()

    
    const sketch_visor = (p) => {
      // p5Container.innerHTML = '<h3 id="titleProj"> <span id="counter"></span></h3>';
      p5Container.innerHTML = '<h3 id="titleProj"></h3>';
      const h = p5Container.clientHeight;

      objVisor[idNumber](p, h);
    }
    new p5(sketch_visor, 'visor')

  })
});

