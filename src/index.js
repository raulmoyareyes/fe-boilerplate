import ButtonExample from './components/button-example';

import './index.css';

let rightNow = new Date();
document.write(`<div>${rightNow}</div>`);

let button = new ButtonExample(5);
document.write(`<div>border: ${button.render()}</div>`);