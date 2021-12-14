const getAverageSpeed = (firstPosition, secondPosition) => {
  const timeDiff = secondPosition.time - firstPosition.time;
  const altitudeDiff = secondPosition.altitude - firstPosition.altitude;
  return Number((altitudeDiff / timeDiff).toFixed(1));
};

module.exports = getAverageSpeed