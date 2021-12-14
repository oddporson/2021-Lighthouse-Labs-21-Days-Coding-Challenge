const assert = require('chai').assert;
const _ = require('../index');

describe("generateAstronautTag", () => {
  it('The generateAstronautTag function should return a string', () => {
    const exampleAstronaut = {
      firstName: "Yuri",
      lastName: "Gagarin",
      nickname: "First!",
      prefix: "Cosmonaut"
    };
    assert.equal(typeof _.generateAstronautTag(exampleAstronaut), "string");
  });
  it("The generateAstronautTag function should return the string in the proper format", () => {
    const exampleAstronaut = {
      firstName: "Yuri",
      lastName: "Gagarin",
      nickname: "First!",
      prefix: "Cosmonaut"
    };
    const expectedOutput = 'Cosmonaut: Yuri "First!" Gagarin';

    assert.equal(_.generateAstronautTag(exampleAstronaut), expectedOutput);
  });
});