require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 3001;

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("DB Connection Successfully!");
  } catch (error) {
    console.log("DB is not connected!");
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await DBConnection();
});
