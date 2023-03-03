const express = require("express");
const app = express();
const mongoose = require("mongoose");


const cors = require("cors");

app.use(express.json());
app.use(cors);



app.listen(3001, () => {
  console.log("server running");
});
