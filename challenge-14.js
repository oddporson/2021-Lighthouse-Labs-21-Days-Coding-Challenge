const switchAllTogglesOn = (toggleList) => {
  const result = [];
  for (const obj of toggleList) {
    obj.isOn = true;
    result.push(obj);
  }
  return result;
};

module.exports = switchAllTogglesOn;