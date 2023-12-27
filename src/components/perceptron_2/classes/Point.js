export function f(x) {
    // y = mx + b;
    return 0.3 * x + 0.2; // Así el mapeo no supera los límites del lienzo
}


export default class Point {
    label;
    bias;

    constructor (p5, x = Math.random() * 2 - 1, y = Math.random() * 2 - 1) {
        this.x = x;
        this.y = y;
        this.bias = 1;
        this.p5 = p5;

        if ( this.y > f(this.x) ) {
            this.label = 1;
        } else {
            this.label = -1;
        }

        // Se quedaría atascado por la ausencia de sesgo
    }

    pixelX () {
        return this.p5.map(this.x, -1, 1, 0, this.p5.width);
    }

    pixelY () {
        return this.p5.map(this.y, -1, 1, this.p5.height, 0);
    }
    
    show (point, radius) {
        this.p5.stroke(0);
        if (label == 1) {
            this.p5.fill(255);
        } else {
            this.p5.fill(0);
        }
        const px = this.pixelX;
        const py = this.pixelY;
        this.p5.ellipse(px, py, 32, 32);
    }
}