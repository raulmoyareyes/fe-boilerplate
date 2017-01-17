import Square from 'shapes/Square';
import Rectangle from 'shapes/Rectangle';

function render() {
  const shapes = [new Rectangle(), new Rectangle(), new Square()];

  shapes.forEach((shape) => {

    switch (shape.constructor.name) {
      case 'Square':
        shape.setLength(5);
        break;
      case 'Rectangle':
        shape.setWidth(6);
        shape.setHeight(3);
    }

    const area = shape.getArea();
    shape.render(area);
  });
}

render();