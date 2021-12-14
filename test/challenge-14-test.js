const assert = require('chai').assert;
const _ = require('../index');

describe("switchAllTogglesOn", ()=> {
  it("The switchAllTogglesOn function should return an array", ()=> {
    const toggleList = [
      {
        name:"Air",
        isOn:true
      },
      {
        name:"Radio",
        isOn:false
      },
    ];

    const result = Array.isArray(_.switchAllTogglesOn(toggleList));
    const expectedOutput = true;

    assert.equal(result, expectedOutput);
  });

  it("The switchAllTogglesOn function should return the array with correct toggles", ()=> {
    const toggleList = [
      {
        name:"Air",
        isOn:true
      },
      {
        name:"Radio",
        isOn:false
      },
    ];

    const result = _.switchAllTogglesOn(toggleList).length;
    const expectedOutput = 2;

    assert.equal(result, expectedOutput);
  });

  it("The switchAllTogglesOn function should return the array with correct toggles", ()=> {
    const toggleList = [
      {
        name:"Air",
        isOn:true
      },
      {
        name:"Radio",
        isOn:false
      },
    ];

    const result = _.switchAllTogglesOn(toggleList);

    const result1 = result[0].isOn;
    const expectedOutput1 = true;

    const result2 = result[1].isOn;
    const expectedOutput2 = true;

    assert.equal(result1, expectedOutput1);
    assert.equal(result2, expectedOutput2);
  });
});