const { makeDb } = require("../data-access");

module.exports = async () => {
  await makeDb();
};
