class Writer {
    constructor () {
        this.text = 'Hello World!';
    }

    getText() {
        return this.text;
    }
}

let writer = new Writer();
let element = document.createElement('div');

element.innerHTML = writer.getText();

document.body.appendChild(element);