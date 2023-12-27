function sign (n) {
    if (n >= 0) {
        return 1
    } else {
        return -1
    };
}

export  default class Perceptron {

    weigths = new Array(2).fill(0); // Ya tenemos el array de los pesos, mejor que como elementos independientes, más flexible
    lr = 0.01;

    constructor () {
        for (let i = 0; i < this.weigths.length; i++ ) {
            this.weigths[i] = Math.random() * 2 - 1;
        }
    }

    guess (inputs) { // Suma de todos los inputs por los pesos
        let sum = 0;
        for (let i = 0; i < this.weigths.length; i++) {
            sum += inputs[i] * this.weigths[i];
        }
        const oputput = sign(sum);
        return oputput
    }

    // Estos son los datos con los que queremos entrenar a nuestro perceptron
        /*
            Tengo tanto el output como la respuesta correcta, así que puedo calcular el "error" (respuesta - output);
            Así, si el output es +1 y la respuesta correcta es +1, el error es 0;
            Todo esto es para poder obtener los pesos óptimos, 
            calculando si el peso ha de ser el suyo mismo o sumarle algo (w0 = w0 + ▲w0) si hubiese algún error
            ¿Cómo calculo ese peso delta (▲)? El proceso es llamado "descenso de gradiente"
            Buscamos una fórmula que nos calcule lo que deseamos menos lo que actualmente tenemos
            [ ▲w0 = error * input(x0) * tasa de aprendizaje ];
            ? La tasa de aprendizaje será lo que guíe finalmente a nuestros pesos para alcanzar el deseado
            Así, los pasos para un aprendizaje supervisado son:
            1. Proveer al perceptron con los inputs de los que ya sabemos respuesta
            2. Preguntar al perceptron para que adivine la respuesta
            3. Computar el error (¿la respuesta estuvo bien o mal?)
            4. Ajustar los pesos según el error
            5. Volver al paso 1 y repetir
            [ new ▲w0 = ▲w0 + error * input(x0) ];
        */ 

    train (inputs, target) {
        let guess = this.guess(inputs); // Obtenemos la suposición;
        let error = target - guess;
        
        // Ajustar todos los pesos
        for (let i = 0; i < this.weigths.length; i++) {
            this.weigths[i] += error * inputs[i] * this.lr; 
        }
    }

}
