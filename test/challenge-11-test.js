const assert = require('chai').assert;
const _ = require('../index');

describe("bookFreePlatform", ()=> {
  it("The bookFreePlatform function should return an array", () => {
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:"2022-01-12"
      },
    ]  
    const missionDate = "2021-12-12"

    const result = Array.isArray(_.bookFreePlatform(platformList, missionDate))
    const expectedOutput = true

    assert.equal(result, expectedOutput);
  })

  it("The bookFreePlatform function should book one platform", () => {
    const platformList = [
      {
        name:"Platform A",
        bookDate:"2021-12-11"
      },
      {
        name:"Platform B",
        bookDate:undefined
      },
      {
        name:"Platform C",
        bookDate:undefined
      },
    ]  
    const missionDate = "2021-12-12"

    const result = _.bookFreePlatform(platformList, missionDate)
    const result1 = result[1].bookDate
    const result2 = result[2].bookDate

    const expectedOutput1 = "2021-12-12"
    const expectedOutput2 = undefined

    assert.equal(result1, expectedOutput1);
    assert.equal(result2, expectedOutput2);
  })
})