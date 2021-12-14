const assert = require('chai').assert;
const _ = require('../index');

describe("checkGaugeStatus", () => {
  it('The addJobToAstronaut function should return an object', () => {
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    };
    const expectedOutput = 'object';
    assert.equal(typeof _.addJobToAstronaut(exampleAstronaut, "Shuttle DJ"), expectedOutput);
  });
  
  it("The addJobToAstronaut function should return the complete astronaut object", () => {
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    };
    const expectedOutput1 = 'Chris';
    const expectedOutput2 = 'Hadfield';
    const expectedOutput3 = 'Space Oddity';
    const expectedOutput4 = 'Astronaut';
    const expectedOutput5 = 'Shuttle DJ';

    assert.equal(_.addJobToAstronaut(exampleAstronaut, "Shuttle DJ").firstName, expectedOutput1);
    assert.equal(_.addJobToAstronaut(exampleAstronaut, "Shuttle DJ").lastName, expectedOutput2);
    assert.equal(_.addJobToAstronaut(exampleAstronaut, "Shuttle DJ").nickname, expectedOutput3);
    assert.equal(_.addJobToAstronaut(exampleAstronaut, "Shuttle DJ").prefix, expectedOutput4);
    assert.equal(_.addJobToAstronaut(exampleAstronaut, "Shuttle DJ").job, expectedOutput5);
  });
});