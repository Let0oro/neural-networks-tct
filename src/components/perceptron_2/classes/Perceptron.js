function sign (n) {
    if (n >= 0) {
        return 1
    } else {
        return -1
    };
}


export  default class Perceptron {
    
    weigths;
    lr = 0.1; // Cuanto más pequeña, más lento aprende, pero con movimientos más pequeños

    constructor (n) {
        this.weigths = Array(n + 1); // 3 valores =  3 pesos (2 + bias o sesgo);
        for (let i = 0; i < this.weigths.length; i++ ) {
            this.weigths[i] = Math.random() * 2 - 1;
        }
    }

    guess (inputs) {
        let sum = 0;
        for (let i = 0; i < this.weigths.length; i++) {
            sum += inputs[i] * this.weigths[i];
        }
        const oputput = sign(sum);
        return oputput
    }

    train (inputs, target) {
        let guess = this.guess(inputs);
        let error = target - guess;
        
        for (let i = 0; i < this.weigths.length; i++) {
            this.weigths[i] += error * inputs[i] * this.lr; 
        }
    }

    guessY (x) {
        const w0 = this.weigths[0];
        const w1 = this.weigths[1];
        const w2 = this.weigths[2];
        return -(w2/w1)*1 - (w0/w1)*x;
    }

}
