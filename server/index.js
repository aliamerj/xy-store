const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user/user.route");
const authRoute = require("./routes/auth/auth.route");

const app = express();
app.use(express.json());
dotenv.config();

app.use("/api/user", userRoute);
app.use("/api/", authRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("connected to mongoDB.. :} "))
  .catch((err) => console.error("could not connect to mongoDB...", err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
