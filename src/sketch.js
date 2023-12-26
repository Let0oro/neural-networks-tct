import perceptron from './components/perceptron';


const ID_COMMON = 'proj';
let name = '';
const objVisor = [
  (p, w, h) => {
    perceptron(p, w, h);
  },
  () => {
     
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
const buttons = document.querySelectorAll('.open-proj');
const p5Container = document.getElementById('visor');

const currentActiveButton = () => document.querySelector('button[aria-current="true"]');

buttons.forEach((button) => {
  button.addEventListener('click', function selectProject(e) {
    e.preventDefault();
    const elem = e.target;
    const idNumber = +elem.id.match(/[0-9]/)-1;

    (function changeCurrent () {
      const currentButton = currentActiveButton();
      if (!!!currentButton.isEqualNode(elem)){
        currentButton.setAttribute('aria-current', 'false');
        elem.setAttribute('aria-current', 'true');
      };
    })()

    
    const sketch_visor = (p) => {
      p5Container.innerHTML = '<h3 id="titleProj"></h3>';
      const w = p5Container.clientWidth;
      const h = p5Container.clientHeight;

      objVisor[idNumber](p, w, h);
    }
    new p5(sketch_visor, 'visor')

  })
});

