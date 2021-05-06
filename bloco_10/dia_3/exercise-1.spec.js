let { randomNum } = require('./exercise-1');

// console.log(randomNum())

test('Test randomNum function', () => {
  randomNum = jest.fn().mockReturnValue(10);

  randomNum();
  expect(randomNum).toHaveBeenCalled();
  expect(randomNum).toHaveBeenCalledTimes(1);
  expect(randomNum()).toBe(10);
});