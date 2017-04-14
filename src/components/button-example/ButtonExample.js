import './ButtonExample.css';

export class ButtonExample {

  border = 0;

  constructor(_border = 0) {
    this.border = _border;
  }

  render() {
    return `${this.border}`;
  }
}

export default ButtonExample;