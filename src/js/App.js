import Square from 'shapes/Square';
import Rectangle from 'shapes/Rectangle';

function App() {
  const shapes = [new Rectangle(), new Rectangle(), new Square()];

  shapes.forEach((shape) => {

    switch (shape.constructor.name) {
      case 'Square':
        shape.setLength(4);
        break;
      case 'Rectangle':
        shape.setWidth(3);
        shape.setHeight(6);
    }

    const area = shape.getArea();
    shape.render(area);
  });
}

export default App;