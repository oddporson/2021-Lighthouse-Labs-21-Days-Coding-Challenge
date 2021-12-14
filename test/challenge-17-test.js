const assert = require('chai').assert;
const _ = require('../index');

describe("switchSpecificToggle", ()=> {
  it("The switchSpecificToggle function should return an array", ()=> {
    const toggleList = [
      {
        name:"toggleA",
        isOn:false
      },
      {
        name:"toggleB",
        isOn: true
      }
    ];
    const specificToggle = "toggleA";

    const result = Array.isArray(_.switchSpecificToggle(toggleList, specificToggle));

    const expectedOutput = true;

    assert.equal(result, expectedOutput);
  });
  it("The switchSpecificToggle function should return an array with all the toggles", ()=> {
    const toggleList = [
      {
        name:"toggleA",
        isOn:false
      }
    ];
    const specificToggle = "toggleA";

    const result = _.switchSpecificToggle(toggleList, specificToggle)[0].isOn;

    const expectedOutput = true;

    assert.equal(result, expectedOutput);
  });
  it("The switchSpecificToggle function should return an array with all the toggles", ()=> {
    const toggleList = [
      {
        name:"toggleA",
        isOn:false
      },
      {
        name:"toggleB",
        isOn: true
      }
    ];
    const specificToggle = "toggleB";

    const result = _.switchSpecificToggle(toggleList, specificToggle);
    const result1 = result[0].name;
    const result2 = result[0].isOn;
    const result3 = result[1].name;
    const result4 = result[1].isOn;

    const expectedOutput1 = "toggleA";
    const expectedOutput2 = false;
    const expectedOutput3 = "toggleB";
    const expectedOutput4 = true;

    assert.equal(result1, expectedOutput1);
    assert.equal(result2, expectedOutput2);
    assert.equal(result3, expectedOutput3);
    assert.equal(result4, expectedOutput4);
  });
});