require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");
const PORT = process.env.PORT || 4001;

// Connect Mongo DB

// =====> Method No: 1
// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then(() => {
//     console.log("✔️✔️  DB connect successfully!");
//   })
//   .catch((error) => {
//     console.log("DB is not connected❌");
//     console.log(error.message);
//   });

// =====> Method No: 2 (Best Method)
const DBConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("✔️✔️  DB is connected ✔️✔️");
  } catch (error) {
    console.log("❌❌ DB is not connected ❌❌");
    console.log(error.message);
    process.exit(1);
  }
};

app.listen(PORT, async () => {
  console.log(`✔️✔️  Server is running at http://localhost:${PORT} ✔️✔️`);
  await DBConnection();
});

// Home route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Connect mongodb.</h1>");
});

// Handle route not found
app.use((req, res, next) => {
  res.status(404).json({
    route: req.url,
    method: req.method,
    message: "404 route not found ❌",
  });
});
