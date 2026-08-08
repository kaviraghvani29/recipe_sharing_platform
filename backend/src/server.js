const express = require("express");
const dotenv = require("dotenv");
// const cors = require("cors");
// const morgan = require("morgan");
const { connectDB } = require("./config/db");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(morgan("dev"));
app.use(cookieParser());

connectDB();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/recipe", recipeRoute);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Recipe Sharing API is running",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
