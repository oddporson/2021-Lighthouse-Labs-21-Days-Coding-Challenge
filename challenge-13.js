const checkAllGauges = (gaugeList) => {
  const arr = [];
  for (const obj of gaugeList) {
    (obj.current < obj.min || obj.current > obj.max) ? arr.push('false') : arr.push('true');
  }
  for (const boolean of arr) {
    if (boolean === 'false') {
      return false;
    }
  }
  return true;
};

module.exports = checkAllGauges;