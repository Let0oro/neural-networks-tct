/*
 
 *Sesgo



                  --------------
                  |            |
     weight1      |            |
 x ------------>  |            |  
                  |   neuron   |--------\  output
     weight2      |            |--------/  
 y ------------>  |            |
                  |            |
!-----------------|------------|-----Error hacia arriba -> caso x0 = 0, x1 = 0, output = 0 (MAL);  
                  |            |
?   SOLUCIÓN      |            | SIEMPRE TIENE VALOR 1 y un peso diferente ("peso de sesgo");
 sesgo (weight3)  |            |
 1 ------------>  |            |
                  --------------
                        ||
                        \/
      ① sum of (all inputs * their weight)
               (x * wx + y * wy) = neuron active | neuron unactive

             ( y = w1/w2 * x + b(sesgo) )
?            ( y = wy/wx * x + wb * 1)               

      ② activation function (many types)
        (we will use "sign function" to classify)
        sign(n: neuron active | neuron unactive) => if (n >= 0) +1; if (n < 0) -1

    ?¿How to choose the weights? -> 

 */

import Perceptron from "./classes/Perceptron.js";
import Point, { f } from "./classes/Point.js";

// Activation function
export default function perceptronP5_2(p5, h) {
  let points = Array(100).fill(0);
  let brain;
  let trainingIndex = 0;
//   let count = 0;
//   let counter = p5.select("#counter").elt;

  p5.setup = function () {
    p5.createCanvas(h, h);
    brain = new Perceptron(2);

    for (let i = 0; i < points.length; i++) {
      points[i] = new Point(p5);
    }

    p5.smooth();
  };

  p5.draw = function () {
    p5.background(255);
    p5.stroke(0);

    const p1 = new Point(p5, -1, f(-1));
    const p2 = new Point(p5, 1, f(1));
    // Así tenemos los datos mapeados, es decir, funcionará con cualquier función que queramos introducir
    p5.line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());

    // Quiero saber lo que el perceptron piensa que es la línea actualmente
    const p3 = new Point(p5, -1, brain.guessY(-1));
    const p4 = new Point(p5, 1, brain.guessY(1));
    p5.line(p3.pixelX(), p3.pixelY(), p4.pixelX(), p4.pixelY());


    for (let point of points) {
      const inputs = [point.x, point.y, point.bias];
      const target = point.label;
      const guess = brain.guess(inputs);
      if (guess == target) {
        p5.fill(0, 255, 0);
      } else {
        p5.fill(255, 0, 0);
      }
      p5.noStroke();
      p5.ellipse(point.pixelX(), point.pixelY(), 8, 8);
    }

    let training = points[trainingIndex];
    const inputs = [training.x, training.y, training.bias];
    const target = training.label;
    brain.train(inputs, target);

    // counter.innerText = count;
    trainingIndex++;
    if (trainingIndex == points.length) {
      trainingIndex = 0;
    //   if (!!!points.every(({ x, y, label }) => brain.guess([x, y]) === label))
    //     count++;
    }
  };
}
