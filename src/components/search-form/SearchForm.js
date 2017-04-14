import Button from '../button';
import Input from '../input';

import './SearchForm.css';

class SearchForm {

  label = '';
  input = null;
  button = null;

  constructor(_label) {
    this.label = _label;
    this.input = new Input();
    this.button = new Button('search');
  }

  render() {
    return (`
      <div class="sf">
        <label>${this.label}</label>
        ${this.input.render()}
        ${this.button.render()}
      </div>
    `);
  }
}

export default SearchForm;