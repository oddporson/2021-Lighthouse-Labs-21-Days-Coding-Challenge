const chooseLunchWinner = (listOfChoices) => {
  const talliedVotes = {};
  let winner = "";
  for (const element of listOfChoices) {
    talliedVotes[element] ? talliedVotes[element]++ : talliedVotes[element] = 1;
  }
  Object.keys(talliedVotes).reduce((a,b) =>
    (talliedVotes[a] > talliedVotes[b]) ? winner = a : winner = b
  );
  return winner;
};

module.exports = chooseLunchWinner;