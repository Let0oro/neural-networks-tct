export default class Point {
    label;

    constructor (p5) {
        this.x = Math.random() * p5.width;
        this.y = Math.random() * p5.height;
        this.p5 = p5;

        if ( this.x > this.y ) {
            this.label = 1;
        } else {
            this.label = -1;
        }
    }
    
    show (point, radius) {
        this.p5.stroke(0);
        const {x, y} = point;
        this.p5.ellipse(x, y, radius, radius);
    }
}