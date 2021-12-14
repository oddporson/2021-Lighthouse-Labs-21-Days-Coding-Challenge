const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!
  const launch = new Date(launchDate);
  const daysLeft = launch.getDate() - today.getDate();
  const obj = {};
  obj.missionName = missionName;
  obj.daysRemaining = daysLeft;
  return obj;
};

module.exports = timeRemaining;