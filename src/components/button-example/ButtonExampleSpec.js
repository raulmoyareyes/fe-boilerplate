import ButtonExample from './ButtonExample'

describe('Example', function() {
  let button = new ButtonExample(5);
  
  it('contains spec with an expectation', function() {
    expect(button.border).toBe(5);
  });
});