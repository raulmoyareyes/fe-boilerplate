import Shape from 'shapes/Shape';

class Rectangle extends Shape {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

export default Rectangle;