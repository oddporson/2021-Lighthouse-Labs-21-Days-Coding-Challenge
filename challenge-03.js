const checkGaugeStatus = (gauge) => {
  if (gauge.current > gauge.min && gauge.current < gauge.max) {
    return true;
  } else {
    return false;
  };
};

module.exports = checkGaugeStatus;