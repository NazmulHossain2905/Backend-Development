require("dotenv").config();
const mongoose = require("mongoose");
const { logSuccess, logError } = require("./utils/logMessages");

const app = require("./app");
const PORT = process.env.PORT || 4001;

const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    logSuccess("✔️✔️  DB is connected ✔️✔️");
  } catch (error) {
    logError("❌❌ DB is not connected ❌❌");
    logError(error.message);
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  logSuccess(`✔️✔️  Server is running at http://localhost:${PORT} ✔️✔️`);
  await DBConnection();
});
