const assert = require('chai').assert;
const _ = require('../index');

describe("averageWindSpeed", ()=> {
  it("The averageWindSpeed function should return a number", ()=> {
    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:44.74 
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:14.74 
      }
    ]  

    const result = typeof _.averageWindSpeed(exampleEntries)
    const expectedOutput = 'number'

    assert.equal(result, expectedOutput);
  })

  it("The averageWindSpeed function should return a rounded number", ()=> {
    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:44.74 
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:14.74 
      }
    ]  

    const result = Number.isInteger(_.averageWindSpeed(exampleEntries))
    const expectedOutput = true

    assert.equal(result, expectedOutput);
  })

  it("The averageWindSpeed function should the proper value", ()=> {
    const exampleEntries = [
      { 
        temperature:0, 
        weather:"sunny", 
        windDirection: "NNE", 
        windSpeed:44 
      },
      { 
        temperature:10, 
        weather:"cloudy", 
        windDirection: "NNE", 
        windSpeed:14
      }
    ]  

    const result = _.averageWindSpeed(exampleEntries)
    const expectedOutput = 29

    assert.equal(result, expectedOutput);
  })
})