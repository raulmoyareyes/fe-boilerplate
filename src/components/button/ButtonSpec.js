import Button from './Button'

describe('Button', function() {
  let button = new Button('my text');
  
  it('contains the text property with the value "my text"', function() {
    expect(button.text).toBe('my text');
  });
});