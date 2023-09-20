const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes");

const app = express();
//Middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
//routes Middleware
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Home page");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((ree) => {
    console.error("Error connecting to MongoDB:", err);
  });
