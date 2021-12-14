const switchToggle = (toggle) => {
  if (!toggle.isOn) {
    toggle.isOn = true;
  } else {
    toggle.isOn = false;
  }
  return toggle;
};

module.exports = switchToggle;