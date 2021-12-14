const addJobToAstronaut = (astronaut, job) => {
  astronaut.job = job;
  return astronaut;
};

module.exports = addJobToAstronaut;