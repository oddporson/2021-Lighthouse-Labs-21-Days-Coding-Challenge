const assert = require('chai').assert;
const _ = require('../index');

describe("switchToggle", () => {
  it('The switchToggle function should return the toggle object', () => {
    const someToggle = {
      name:"toggleB",
      isOn:true
    };
    const expectedOutput = 'object';

    assert.equal(typeof _.switchToggle(someToggle), expectedOutput);
  });
  
  it("The switchToggle function should return the updated toggle object", () => {
    const someToggle = {
      name:"toggleB",
      isOn:true
    };
    const expectedOutput = false;

    assert.equal(_.switchToggle(someToggle).isOn, expectedOutput);
  });

  it("The switchToggle function should return the updated toggle object when ran twice", () => {
    const someToggle = {
      name:"toggleA",
      isOn:false
    };

    const firstRun = _.switchToggle(someToggle);
    const expectedOutput1 = true;
    assert.equal(firstRun.isOn, expectedOutput1);

    const secondRun = _.switchToggle(firstRun);
    const expectedOutput2 = false;
    assert.equal(secondRun.isOn, expectedOutput2);
  });


});