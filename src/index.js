import hello from 'lib/Hello';
import { world, imported } from 'lib/world/World';

class Writer {

    constructor () {
        this.text = hello() + ' ' + world();
    }

    getText() {
        return this.text;
    }
}

let writer = new Writer();
let element = document.createElement('div');

element.innerHTML = writer.getText();

document.body.appendChild(element);