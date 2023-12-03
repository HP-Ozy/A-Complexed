const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4300;
app.use(cors());

// Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/A-X", {
 
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Failed" + error);
  });



// Schema per la "collection"
const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Modello per lo schema
const angular = mongoose.model("angular", newSchema);


module.exports = {
  app,
  angular,
  port,
};
