const assert = require('chai').assert;
const _ = require('../index');

describe("organizeData", ()=> {
  it("The organizeData function should return an object", ()=> {
    const listOfReceivedData = [
      {type:"astro", data:"Saturn Data"},
      {type:"bio", data:"Space Potatoes"},
      {type:"physics", data:"Lagrange Points"},
      {type:"bio", data:"OMG Tardigrades"},
      {type:"physics", data:"Material reflectivity"},
      {type:"astro", data:"Mercury is not the hottest"},
    ];

    const result = typeof _.organizeData(listOfReceivedData);

    const expectedOutput = "object";

    assert.equal(result, expectedOutput);
  });
  it("The organizeData function should return proper object keys", ()=> {
    const listOfReceivedData = [
      {type:"astro", data:"Saturn Data"},
      {type:"bio", data:"Space Potatoes"},
      {type:"physics", data:"Lagrange Points"},
      {type:"bio", data:"OMG Tardigrades"},
      {type:"physics", data:"Material reflectivity"},
      {type:"astro", data:"Mercury is not the hottest"},
    ];

    const result = _.organizeData(listOfReceivedData);

    const result1 = result.hasOwnProperty("astro");
    const result2 = result.hasOwnProperty("bio");
    const result3 = result.hasOwnProperty("physics");

    const expectedOutput = true;

    assert.equal(result1, expectedOutput);
    assert.equal(result2, expectedOutput);
    assert.equal(result3, expectedOutput);
  });
  it("The organizeData function should return proper object values", ()=> {
    const listOfReceivedData = [
      {type:"astro", data:"Saturn Data"},
      {type:"bio", data:"Space Potatoes"},
      {type:"physics", data:"Lagrange Points"},
      {type:"bio", data:"OMG Tardigrades"},
      {type:"physics", data:"Material reflectivity"},
      {type:"astro", data:"Mercury is not the hottest"},
    ];

    const result = _.organizeData(listOfReceivedData);

    const result1 = Array.isArray(result.astro);
    const result2 = Array.isArray(result.bio);
    const result3 = Array.isArray(result.physics);

    const expectedOutput = true;

    assert.equal(result1, expectedOutput);
    assert.equal(result2, expectedOutput);
    assert.equal(result3, expectedOutput);
  });
  it("The organizeData function should return proper object values", ()=> {
    const listOfReceivedData = [
      {type:"astro", data:"Saturn Data"},
      {type:"bio", data:"Space Potatoes"},
      {type:"physics", data:"Lagrange Points"},
      {type:"bio", data:"OMG Tardigrades"},
      {type:"physics", data:"Material reflectivity"},
      {type:"astro", data:"Mercury is not the hottest"},
    ];

    const result = _.organizeData(listOfReceivedData);

    const result1 = result.astro.length;
    const result2 = result.bio.length;
    const result3 = result.physics.length;

    const expectedOutput = 2;

    assert.equal(result1, expectedOutput);
    assert.equal(result2, expectedOutput);
    assert.equal(result3, expectedOutput);
  });
  it("The organizeData function should return proper object values", ()=> {
    const listOfReceivedData = [
      {type:"bio", data:"Space Potatoes"},
      {type:"physics", data:"Lagrange Points"},
      {type:"bio", data:"OMG Tardigrades"},
    ];

    const result = _.organizeData(listOfReceivedData);

    const result1 = result.bio.includes("Space Potatoes");
    const result2 = result.bio.includes("OMG Tardigrades");
    const result3 = result.physics.includes("Lagrange Points");

    const expectedOutput = true;

    assert.equal(result1, expectedOutput);
    assert.equal(result2, expectedOutput);
    assert.equal(result3, expectedOutput);
  });
});