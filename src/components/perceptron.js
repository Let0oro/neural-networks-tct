/*
 
    Una neurona a la que llegan dos input de información, x->x0 e y->x1 (posiciones) y, 
    tras un proceso matemático en la neurona, esta devuelve un output con la respuesta.

 *Método feed-fordward -> aprendizaje supervisado

     weight1      --------------
 x0------------>  |            |  
                  |   neuron   |--------\  output
     weight2      |            |--------/  
 y1------------>  |            |  
                  --------------
                        ||
                        \/
      ① sum of (all inputs * their weight)
               (x0 * w0 + x1 * w1) = neuron active | neuron unactive

      ② activation function (many types)
        (we will use "sign function" to classify)
        sign(n: neuron active | neuron unactive) => if (n >= 0) +1; if (n < 0) -1

    ?¿How to choose the weights? -> 

 */
import Perceptron from "./classes/Perceptron.js";
import Point from "./classes/Point.js";

// Activation function
export default function perceptronP5(p5, h) {
  let points = Array(100).fill(0);
  let brain;
  let trainingIndex = 0;
  let count = 0;
  let counter = p5.select('#counter').elt;

  p5.setup = function () {
    p5.createCanvas(h, h);
    brain = new Perceptron();

    for (let i = 0; i < points.length; i++) {
      points[i] = new Point(p5);
    }

    const inputs = [-1, 0.5];
    const guess = brain.guess(inputs);
    p5.smooth();
  };

  p5.draw = function () {
    p5.background(255);
    p5.stroke(0);
    p5.line(0, 0, p5.width, p5.height);

    for (let point of points) {
      const inputs = [point.x, point.y];
      const target = point.label;
      const guess = brain.guess(inputs);
      if (guess == target) {
        p5.fill(0, 255, 0);
      } else {
        p5.fill(255, 0, 0);
      }
      point.show(point, 8);
    }

    let training = points[trainingIndex];
    const inputs = [training.x, training.y];
    const target = training.label;
    brain.train(inputs, target);
    counter.innerText = count;
    trainingIndex++;
    if (trainingIndex == points.length) {
        trainingIndex = 0;
        if (!!!points.every(({x, y, label}) => brain.guess([x, y]) === label)) count++;
    }
  };
}
