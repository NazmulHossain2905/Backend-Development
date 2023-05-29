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

/**
 * 
 * 
 * 
 * 
 * 


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
  console.log(``);
  console.log(`✔️✔️  Server is running at http://localhost:${PORT} ✔️✔️`);
  await DBConnection();
});

// Create product schema
const productsSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create product model
const Products = mongoose.model("Products", productsSchema);

app.post("/api/products", async (req, res) => {
  try {
    const { title, description, price } = req?.body;

    const newProduct = new Products({
      title,
      description,
      price,
    });

    const product = await newProduct.save();
    if (!product) {
      return res.status(400).json({
        success: false,
        message: "Something was wrong!",
      });
    } else {
      return res.status(201).json({
        success: true,
        message: "Product create successfully!",
        product,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

// Home route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the Connect mongodb.</h1>");
});

app.use((req, res, next) => {
  res.status(404).json({
    route: req.url,
    method: req.method,
    message: "404 route not found ❌",
  });
});

 */
