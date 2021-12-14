const assert = require('chai').assert;
const _ = require('../index');

describe("getAverageSpeed", ()=> {
  it("The getAverageSpeed function should return a number", ()=> {
    const firstPosition = {
      time:1637074462,
      altitude:1100
    }
    const secondPosition = {
      time:1637074558,
      altitude:2200
    }

    const result = typeof _.getAverageSpeed(firstPosition, secondPosition)

    const expectedOutput = "number"

    assert.equal(result, expectedOutput);
  });

  it("The getAverageSpeed function should return the proper number", ()=> {
    const firstPosition = {
      time:1637074462,
      altitude:1100
    }
    const secondPosition = {
      time:1637074558,
      altitude:2200
    }

      const result = _.getAverageSpeed(firstPosition, secondPosition)

      const expectedOutput = 11.5

      assert.equal(result, expectedOutput);
  });
});