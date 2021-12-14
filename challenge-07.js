const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  const obj = {};
  obj.temperature = Math.round((temperature - 32) * (5 / 9));
  obj.condition = condition;
  obj.windSpeed = Math.round((windSpeed / 2.237));
  obj.windDirection = windDirection;
  return obj;
};

module.exports = storeWeatherConditions;