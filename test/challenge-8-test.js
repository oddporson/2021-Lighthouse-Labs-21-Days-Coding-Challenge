const assert = require('chai').assert;
const _ = require('../index');

describe("countActiveAstronaut", () => {
  it("The countActiveAstronauts function should return a number", ()=> {
    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
      }
    ];

    const result = _.countActiveAstronauts(exampleRoster);
    const expectedOutput = 'number';

    assert.equal(typeof result, expectedOutput);
  });
  it("The countActiveAstronauts function should return the proper length", ()=> {
    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
      }
    ];

    const result = _.countActiveAstronauts(exampleRoster);
    const expectedOutput = 1;
    assert.equal(result, expectedOutput);
  });
});