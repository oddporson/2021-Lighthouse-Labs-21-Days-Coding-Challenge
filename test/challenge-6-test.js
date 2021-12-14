const assert = require('chai').assert;
const _ = require('../index');

describe("addAstronautToRoster", () => {
  it('The addAstronautToRoster function should return an array', () => {
    const exampleRoster = [];
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    };
    const expectedOutput = true;

    assert.equal(Array.isArray(_.addAstronautToRoster(exampleRoster, exampleAstronaut)), expectedOutput);
  });
  
  it("The addAstronautToRoster function should return an array with the astronaut inside", () => {
    const exampleRoster = [];
    const exampleAstronaut1 = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut"
    };
    const exampleAstronaut2 = {
      firstName:"Julie",
      lastName: "Payette",
      nickname:"GG",
      prefix:"Astronaut"
    };
    const firstOutput = _.addAstronautToRoster(exampleRoster, exampleAstronaut1);
    const expectedOutput1 = 1;
    assert.equal(firstOutput.length, expectedOutput1);

    const secondOutput = _.addAstronautToRoster(firstOutput, exampleAstronaut2);
    const expectedOutput2 = 2;
    assert.equal(secondOutput.length, expectedOutput2);
  });

  it("The addAstronautToRoster function should return an array with the astronaut inside", () => {
    const exampleRoster = [];
    const exampleAstronaut = {
      firstName:"Chris",
      lastName: "Hadfield",
      nickname:"Space Oddity",
      prefix:"Astronaut",
      job:"Shuttle DJ"
    };
    const expectedOutput1 = 'Chris';
    const expectedOutput2 = 'Hadfield';
    const expectedOutput3 = 'Space Oddity';
    const expectedOutput4 = 'Astronaut';
    const expectedOutput5 = 'Shuttle DJ';

    const updatedRoster = _.addAstronautToRoster(exampleRoster, exampleAstronaut);

    assert.equal(updatedRoster[0].firstName, expectedOutput1);
    assert.equal(updatedRoster[0].lastName, expectedOutput2);
    assert.equal(updatedRoster[0].nickname, expectedOutput3);
    assert.equal(updatedRoster[0].prefix, expectedOutput4);
    assert.equal(updatedRoster[0].job, expectedOutput5);
  });

});