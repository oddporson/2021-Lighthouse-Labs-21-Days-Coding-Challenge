const parseMessage = (origin, message) => `${origin}: ${message}`;

const parseMissionSummary = (exchanges, missionData) => {
  const transcribeArr = [];
  const result = {};
  for (const obj of exchanges) {
    transcribeArr.push(parseMessage(obj.origin, obj.message));
  }
  result["transcript"] = transcribeArr;
  result['missionData'] = missionData;
  return result;
};

module.exports = parseMissionSummary;