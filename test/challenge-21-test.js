const assert = require('chai').assert;
const _ = require('../index');

describe("parseMissionSummary", ()=> {
  it("The parseMissionSummary function should return an object", ()=> {
    const exchanges = [
      {origin:"MC", message:"So how is it out there?"},
      {origin:"Shuttle", message:"Oh it's pretty nice!"},
      {origin:"MC", message:"How did you like the challenges?"},
    ];
    
    const missionData = {
      astro:["...","..."],
      bio:["..."],
      physics:["..."]
    };

    const result = typeof _.parseMissionSummary(exchanges, missionData);

    const expectedOutput = "object";

    assert.equal(result, expectedOutput);
  });
  it("The parseMissionSummary function should return an object with proper keys", ()=> {

    const exchanges = [
      {origin:"MC", message:"So how is it out there?"},
      {origin:"Shuttle", message:"Oh it's pretty nice!"},
      {origin:"MC", message:"How did you like the challenges?"},
    ];
    
    const missionData = {
      astro:["...","..."],
      bio:["..."],
      physics:["..."]
    };

    const result = _.parseMissionSummary(exchanges, missionData);

    const result1 = result.hasOwnProperty("transcript");
    const result2 = result.hasOwnProperty("missionData");

    const expectedOutput = true;

    assert.equal(result1, expectedOutput);
    assert.equal(result2, expectedOutput);
  });
  it("The parseMissionSummary function should return an object with proper value types", ()=> {
    const exchanges = [
      {origin:"MC", message:"So how is it out there?"},
      {origin:"Shuttle", message:"Oh it's pretty nice!"},
      {origin:"MC", message:"How did you like the challenges?"},
    ];
    
    const missionData = {
      astro:["...","..."],
      bio:["..."],
      physics:["..."]
    };

    const result = _.parseMissionSummary(exchanges, missionData);

    const result1 = Array.isArray(result.transcript);
    const result2 = typeof result.missionData;

    const expectedOutput1 = true;
    const expectedOutput2 = "object";

    assert.equal(result1, expectedOutput1);
    assert.equal(result2, expectedOutput2);
  });
  it("The parseMissionSummary function should return an object with proper values", ()=> {
    const exchanges = [
      {origin:"MC", message:"So how is it out there?"},
      {origin:"Shuttle", message:"Oh it's pretty nice!"}
    ];
    
    const missionData = {
      astro:["...","..."],
      bio:["..."],
      physics:["..."]
    };

    const result = _.parseMissionSummary(exchanges, missionData);

    const result1 = result.transcript.length;
    const result2 = result.transcript[0];
          
    const result3 = result.missionData.astro[1];
    const result4 = result.missionData.bio[0];
    const result5 = result.missionData.physics[0];

    const expectedOutput1 = 2;
    const expectedOutput2 = "MC: So how is it out there?";

    const expectedOutput3 = "...";
    const expectedOutput4 = "...";
    const expectedOutput5 = "...";

    assert.equal(result1, expectedOutput1);
    assert.equal(result2, expectedOutput2);
    assert.equal(result3, expectedOutput3);
    assert.equal(result4, expectedOutput4);
    assert.equal(result5, expectedOutput5);
  });
});