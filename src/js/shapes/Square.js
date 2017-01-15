import Shape from 'shapes/Shape';

class Square extends Shape {
    constructor() {
        super();
        this.length = 0;
    }

    setLength(length) {
        this.length = length;
    }

    getArea() {
        return this.length * this.length;
    }
}

export default Square;