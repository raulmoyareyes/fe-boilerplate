class Shape {
    setColor(color) {
        this.color = color;
    }

    render(area) {
        let element = document.createElement('div');

        element.innerText = area;
        document.body.appendChild(element);
    }
}

export default Shape;