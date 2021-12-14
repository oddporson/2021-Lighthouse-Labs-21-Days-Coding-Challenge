const assert = require('chai').assert;
const _ = require('../index');

describe("timeRemaining", ()=> {
  it("The timeRemaining function should return an object", ()=> {
    const launchDate = "12-16-2021";
    const missionName = "Moon visit";

    const result = typeof _.timeRemaining(launchDate, missionName);
    const expectedOutput = "object";

    assert.equal(result, expectedOutput);
  });

  it("The timeRemaining function should return have the proper keys", ()=> {
    const launchDate = "12-12-2021";
    const missionName = "Moon visit";

    const result = _.timeRemaining(launchDate, missionName);
    const expectedOutput = true;

    assert.equal(result.hasOwnProperty('daysRemaining'), expectedOutput);
    assert.equal(result.hasOwnProperty('missionName'), expectedOutput);
  });

  it("The timeRemaining function should return have the proper values", ()=> {
    const launchDate = "12-12-2021";
    const fakeToday = new Date("12-1-2021");
    const missionName = "Moon visit";

    const result = _.timeRemaining(launchDate, missionName, fakeToday);
    const expectedOutput1 = 11;
    const expectedOutput2 = "Moon visit";

    assert.equal(result.daysRemaining, expectedOutput1);
    assert.equal(result.missionName, expectedOutput2);
  });
});