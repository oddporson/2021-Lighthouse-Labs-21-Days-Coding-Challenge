const assert = require('chai').assert;
const _ = require('../index');

describe("listAstronautJobs", ()=> {
  it("The listAstronautJobs function should return an array of strings", ()=> {
    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
      }
    ];

    const result = _.listAstronautJobs(exampleRoster)[0];
    const expectedOutput = 'string';

    assert.equal(typeof result, expectedOutput);
  });

  it("The listAstronautJobs function should return an array of proper values", ()=> {
    const exampleRoster = [
      {
        firstName:"Chris",
        lastName: "Hadfield",
        nickname:"Space Oddity",
        prefix:"Astronaut",
        job:"Shuttle DJ"
      }
    ];

    const result = _.listAstronautJobs(exampleRoster)[0];
    const expectedOutput = "Shuttle DJ";

    assert.equal(result, expectedOutput);
  });


});