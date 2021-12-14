const assert = require('chai').assert;
const _ = require('../index');

describe("checkAllGuages", () => {
  it("The checkAllGauges function should return a boolean", ()=> {
    const gaugeList = [
      {
        current:0.4,
        min:0.1,
        max:0.9
      },
      {
        current:0.4,
        min:0.1,
        max:0.9
      }
    ];

    const result = typeof _.checkAllGauges(gaugeList);
    const expectedOutput = "boolean";

    assert.equal(result, expectedOutput);
  });

  it("The checkAllGauges function should return the proper value", ()=> {
    const gaugeList = [
      {
        current:0.4,
        min:0.1,
        max:0.9
      },
      {
        current:0.61,
        min:0.1,
        max:0.6
      }
    ];

    const result = _.checkAllGauges(gaugeList);
    const expectedOutput = false;

    assert.equal(result, expectedOutput);
  });
});