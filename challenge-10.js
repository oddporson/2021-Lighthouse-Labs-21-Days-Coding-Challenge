const averageWindSpeed = (weatherEntries) => {
  let num = 0;
  for (key of weatherEntries) {
    num += key.windSpeed;
  }
  return Math.round(num/weatherEntries.length);
}

module.exports = averageWindSpeed;