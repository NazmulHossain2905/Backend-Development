require("dotenv").config();
const chalk = require("chalk");
const app = require("./app");
const PORT = process.env.PORT || 4001;

const error = chalk.bold.red;
const warning = chalk.hex("#FFA500"); // Orange color

console.log(error("Error!"));
console.log(warning("Warning!"));

const showWarning = (text) => {
  console.log(chalk.hex("#FFA500").bold(text));
};
const showError = (text) => {
  console.log(chalk.red.bold(text));
};
const showSuccess = (text = "Write your success message") => {
  console.log(chalk.green.bold(text));
};

app.listen(PORT, () => {
  console.log(
    chalk.bgGreen.bold.italic(`Server is running at http://localhost:${PORT}`)
  );
  showWarning("Warning Message");
  showError("Error Message");
  showSuccess("Success Message");
  showSuccess("Success");
});
