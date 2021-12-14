const assert = require('chai').assert;
const _ = require('../index');

describe("confirmReentryPlans", ()=> {
  it("The confirmReentryPlans function should return a boolean", ()=> {
    const speed = 40;
    const missionData = {
      astro:["...","..."],
      bio:["..."],
      physics:["..."]
    };

    const checks = {
      maxSpeed:50,
      minSpeed:20,
      dataEntries:{
        astro:3,
        bio:1,
        physics:1
      }
    };

    const result = typeof _.confirmReentryPlans(speed, missionData, checks);

    const expectedOutput = "boolean";

    assert.equal(result, expectedOutput);
  });
  it("The confirmReentryPlans function should return the proper value", ()=> {
    // When everything is good
    const speed = 40;
    const missionData = {
      astro:["...","..."],
      bio:["..."],
      physics:["..."]
    };

    const checks = {
      maxSpeed:50,
      minSpeed:20,
      dataEntries:{
        astro:2,
        bio:1,
        physics:1
      }
    };

    const result = _.confirmReentryPlans(speed, missionData, checks);

    const expectedOutput = true;

    assert.equal(result, expectedOutput);
  });
});