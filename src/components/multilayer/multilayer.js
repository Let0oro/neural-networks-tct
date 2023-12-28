// Biblioteca neural networks https://github.com/shiffman/Neural-Network-p5?tab=readme-ov-file
/* 
    TODO: Primero, introducción a las matrices y su conexión con las redes neuronales
    ! importamos la biblioteca nn.js (neural networks) de forma local desde el archivo html, igual que p5.js

    const nn = new NeuralNetwork(neurons_input_number, neurons_hidden_number, neurons_output_number)
    + neurons_input_number -> número de neuronas de entrada (input)
    + neurons_hidden_number -> número de neuronas ocultas o de cálculo (hidden)
    + neurons_output_number -> número de neuronas de salida (output)


    ? ¿Cuántas neuronas elegimos por cada capa?

    * Siguiente paso: Feed-forward (aprendizaje supervisado)
    - Para las neuronas en la capa oculta, necesitamos hacer una "suma ponderada" (weighted sum -> i0 * w0 + i1 * w1 ...)
    - Entrenar la red neuronal para obtener sus pesos óptimos
    - Para evitar depender de los inputs, intentar normalizarlos para que el peso total sea equilibrado
    - El resultado de la suma ponderada saldrá de las neuronas ocultas al output, a través de una función de activación
    - El siguiente paso común es almacenar todas las sumas ponderadas en una matriz
    
            inputs   *   weights   =   outputs  $   /--------------------------------------\
            ------       ------                 $            ------   [w11]   ------   
            | i0 |       | w0 |                 $     x1---> | i1 | --------> | h1 |   
Matriz:     | i1 |       | w1 |                 $            ------\          /-----\  
            | i2 |       | w2 |                 $                   \[w12]   /       \
            | i3 |       | w3 |                 $                    --------         >---> output
            |  . |       |  . |                 $                   /[w21]   \       /  
            | in |       | wn |                 $            ------/          \-----/
            ------       ------                 $     x2---> | i2 | --------> | h2 |
                                                $            ------   [w22]   ------
                                                $    \--------------------------------------/        
                                                $                       | En matrizes y vectores
Suma ponderada:                                 $                       v
                                                $        /           \     /      \     /      \
     x1 * w11 + x2 * w21 = h1   <----------------------  |  w11 w21  |  *  |  x1  |  =  |  h1  |
     x1 * w11 + x2 * w21 = h1       [Álgebra    $        |  w12 w22  |     |  x2  |     |  h2  |
                                      lineal]   $        \           /     \      /     \      /
                                             \
                                              \
                                               \-> Implica manipular vectores y matrices
                                                    -> Vector: lista unidimensional de valores (inp, out)
                                                    -> Matriz: lista bidimensional de valores (weights)
  
  ! Usaremos la biblioteca de matrices (matrix.js) que importamos en nuestro html
 
*/

/*
  TODO: Segundo, matrices matemáticas, conocimientos básicos

  


*/

function multilayer (p5, h) {


    let brain;

    p5.setup = function () {

        brain = new NeuralNetwork(3, 3, 1)

    }

    p5.draw = function () {

    }

}