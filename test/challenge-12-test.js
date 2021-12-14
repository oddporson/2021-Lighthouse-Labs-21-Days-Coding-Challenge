const assert = require('chai').assert;
const _ = require('../index');

describe("parseTranscripts", ()=> {
  it("The parseTranscripts function should return an array", ()=> {
    const messages = [
      {origin:"MC", message:"Hello!"}
    ];

    const result = Array.isArray(_.parseTranscripts(messages));
    const expectedOutput = true;

    assert.equal(result, expectedOutput);
  });

  it("The parseTranscripts function should return all the messages", ()=> {
    const messages = [
      {origin:"MC", message:"Hello!"},
      {origin:"Shuttle", message:"Hey!"},
    ];

    const result = _.parseTranscripts(messages).length;
    const expectedOutput = 2;

    assert.equal(result, expectedOutput);
  });

  it("The parseTranscripts function should return all the messages", ()=> {
    const messages = [
      {origin:"MC", message:"Hello!"},
      {origin:"Shuttle", message:"Hey!"},
    ];
    const result1 = _.parseTranscripts(messages)[0];
    const expectedOutput1 = "MC: Hello!";

    const result2 = _.parseTranscripts(messages)[1];
    const expectedOutput2 = "Shuttle: Hey!";

    assert.equal(result1, expectedOutput1);
    assert.equal(result2, expectedOutput2);
  });
});