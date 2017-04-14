import './Button.css';

export class Button {

  text = '';

  constructor(_text = '') {
    this.text = _text;
  }

  render() {
    return (`<div class="btn">${this.text}</div>`);
  }
}

export default Button;