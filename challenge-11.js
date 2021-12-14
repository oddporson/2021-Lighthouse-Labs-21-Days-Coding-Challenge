const bookFreePlatform = (platformList, missionDate) => {
  for (const obj of platformList) {
    if (obj.bookDate === undefined) {
      obj.bookDate = missionDate;
      break;
    }
  }
  return platformList;
};

module.exports = bookFreePlatform;