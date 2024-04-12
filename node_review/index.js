const express = require("express");
import connectToDb from "./db/index.js"
import express from "express"

const app = express();

app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
