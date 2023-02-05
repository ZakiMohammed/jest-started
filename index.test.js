const { sum } = require('./index');

// test suite
describe('Index', () => {
  // test spec
  it('should add two numbers', () => {
    // arrange
    const expected = 30;

    // act
    const received = sum(10, 20);

    // assert
    expect(received).toBe(expected);
  });
});
