require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URL;
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");



app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", authRoute);
app.get("/", (req, res) => {
  res.send("welcome");
});

//all holdings
app.get("/allholdings", async (req, res) => {
  let data = await HoldingModel.find({});
  res.json(data);
});

//add posititons
app.get("/allPositions", async (req, res) => {
  let data = await PositionModel.find({});
  res.json(data);
});

//add orders
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("order saved");
});

connect()
  .then(() => {
    console.log("database connted..");
  })
  .catch((e) => {
    console.log(e);
  });

async function connect() {
  await mongoose.connect(url);
}
app.listen(PORT, () => {
  console.log(`server started..${PORT}`);
});
