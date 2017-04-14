import SearchForm from './components/search-form';
import Button from './components/button';

import './index.css';

let rightNow = new Date();
document.write(`<div>${rightNow}</div>`);

let searchForm = new SearchForm('Your text:');
document.write(searchForm.render());

let button = new Button('other button');
document.write(button.render());