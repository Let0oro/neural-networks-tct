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

export default function perceptronP5 (p, w, h) {

    p.setup = function () {
        p.createCanvas(w, h);
        p.background(220);
        console.log('canvas!!')
    }

    p.draw = function () {

    }

}

  
    
