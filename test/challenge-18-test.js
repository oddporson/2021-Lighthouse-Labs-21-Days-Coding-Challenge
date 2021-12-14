const assert = require('chai').assert;
const _ = require('../index');

describe("chooseLunchWinner", ()=> {
  it("The chooseLunchWinner function should return a string", ()=> {
    const listOfChoices = [
      "Chicken Dinner",
      "Chicken Dinner",
      "Chicken Dinner",
      "Ice Cream Sandwich",
      "Ice Cream Sandwich"
    ];

    const result = typeof _.chooseLunchWinner(listOfChoices);

    const expectedOutput = "string";

    assert.equal(result, expectedOutput);
  });

  it("The chooseLunchWinner function should return the proper value", ()=> {
    const listOfChoices = [
      "Poutine",
      "Poutine",
      "Poutine",
      "Smoked Meat",
      "Smoked Meat"
    ];

    const result = _.chooseLunchWinner(listOfChoices);

    const expectedOutput = "Poutine";

    assert.equal(result, expectedOutput);
  });
});