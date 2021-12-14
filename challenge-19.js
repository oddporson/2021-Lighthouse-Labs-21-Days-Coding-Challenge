const organizeData = (receivedData) => {
  const astroArr = [];
  const bioArr = [];
  const physicsArr = [];
  const result = {};
  for (const obj of receivedData) {
    if (obj.type === "astro") {
      astroArr.push(obj.data);
    } else if (obj.type === "bio") {
      bioArr.push(obj.data);
    } else if (obj.type === "physics") {
      physicsArr.push(obj.data);
    }
  }
  result['astro'] = astroArr;
  result['bio'] = bioArr;
  result['physics'] = physicsArr;
  return result;
};

module.exports = organizeData;