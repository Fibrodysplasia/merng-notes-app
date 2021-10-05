const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://user1:Password1@fccapp1.mr9hc.mongodb.net/notesapp")

app.use("/", require("./routes/noteRoute"));

app.listen(3001, function() {
    console.log("express server running on port 3001");
})