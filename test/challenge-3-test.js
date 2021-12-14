const assert = require('chai').assert;
const _ = require('../index');

describe("checkGaugeStatus", () => {
  it('The checkGaugeStatus function should return a boolean', () => {
    const exampleGauge = {
      current:1.4,
      min:0.1,
      max:0.9
    };
    const expectedOutput = 'boolean';
    assert.equal(typeof _.checkGaugeStatus(exampleGauge), expectedOutput);
  });
  
  it("The checkGaugeStatus function should return the proper boolean", () => {
    const exampleGauge = {
      current:0.4,
      min:0.1,
      max:0.9
    };
    const expectedOutput = true;
    assert.equal(_.checkGaugeStatus(exampleGauge), expectedOutput);
  });
});