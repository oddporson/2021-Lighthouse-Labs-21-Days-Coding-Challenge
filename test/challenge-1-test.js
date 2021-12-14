const assert = require('chai').assert;
const _ = require('../index');

describe("parseMessage", () => {
  it('The parseMessage function should return a string', () => {
    const origin = "MC";
    const message = "Hello";
    assert.equal(typeof _.parseMessage(origin, message), "string");
  });
  it("The parseMessage function should return the string in the proper format", () => {
    const origin = "MC";
    const message = "Hello";
    const expectedMessage = "MC: Hello";
    assert.equal(_.parseMessage(origin,message), expectedMessage);
  });
});

