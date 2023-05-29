const chalk = require("chalk");

const logSuccess = (text = "Write your success message") => {
  console.log(chalk.green.bold(text));
};
const logWarning = (text = "Write your warning message") => {
  console.log(chalk.hex("#ff0").bold(text));
};
const logError = (text = "Write your error message") => {
  console.log(chalk.red.bold(text));
};

module.exports = {
  logSuccess,
  logWarning,
  logError,
};
