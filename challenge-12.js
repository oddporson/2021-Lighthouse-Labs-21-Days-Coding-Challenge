const parseTranscripts = (obj) => {
  const arr = [];
  for (const value of obj) {
    arr.push(`${value.origin}: ${value.message}`);
  }
  return arr;
};

module.exports = parseTranscripts;