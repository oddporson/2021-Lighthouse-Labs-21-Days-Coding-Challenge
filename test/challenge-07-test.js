const assert = require('chai').assert;
const _ = require('../index');

describe("storeWeatherConditions", () => {
  it('The storeWeatherConditions function should return an object', () => {
    const temperature = 32;
    const condition = "Sunny with small clouds";
    const windSpeed = 20;
    const windDirection = "NNE";

    const result = _.storeWeatherConditions(temperature, condition, windSpeed, windDirection);
    const expectedOutput = 'object';

    assert.equal(typeof result, expectedOutput);
  });
  
  it("The storeWeatherConditions function should return a all the proper keys", () => {
    const temperature = 32;
    const condition = "Sunny with small clouds";
    const windSpeed = 20;
    const windDirection = "NNE";

    const result = _.storeWeatherConditions(temperature, condition, windSpeed, windDirection);
    const expectedOutput = true;

    assert.equal(result.hasOwnProperty('temperature'), expectedOutput);
    assert.equal(result.hasOwnProperty('condition'), expectedOutput);
    assert.equal(result.hasOwnProperty('windSpeed'), expectedOutput);
    assert.equal(result.hasOwnProperty('windDirection'), expectedOutput);
  });

  it("The storeWeatherConditions function should return all the proper values", () => {
    const temperature = 32;
    const condition = "Sunny with small clouds";
    const windSpeed = 20;
    const windDirection = "NNE";

    const result = _.storeWeatherConditions(temperature, condition, windSpeed, windDirection);
    const expectedOutput1 = 0;
    const expectedOutput2 = "Sunny with small clouds";
    const expectedOutput3 = 9;
    const expectedOutput4 = "NNE";

    assert.equal(result.temperature, expectedOutput1);
    assert.equal(result.condition, expectedOutput2);
    assert.equal(result.windSpeed, expectedOutput3);
    assert.equal(result.windDirection, expectedOutput4);
  });

});