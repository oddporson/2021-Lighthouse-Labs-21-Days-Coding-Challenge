const switchSpecificToggle = (toggleList, specificToggle) => {
  for (const toggle of toggleList) {
    (toggle.name === specificToggle) ? toggle.isOn = true : toggle.isOn = false;
  }
  return toggleList;
};

module.exports = switchSpecificToggle;