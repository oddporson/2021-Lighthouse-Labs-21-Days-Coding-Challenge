const confirmReentryPlans = (speed, missionData, checks) => {
  if (speed > checks.maxSpeed || speed < checks.minSpeed) {
    return false;
  }
  for (const key in missionData) {
    const checksKeyLength = checks.dataEntries[key];
    const keyLength = missionData[key].length;
    if (keyLength !== checksKeyLength) {
      return false;
    }
  }
  return true;
};

module.exports = confirmReentryPlans;