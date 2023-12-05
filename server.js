const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 4200;

const corsOptions = {
  origin: 'http://localhost:4200', // Sostituisci con l'URL del tuo frontend
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Connect to MongoDB database
mongoose
  .connect("mongodb://0.0.0.0:27017/A-X", {
  
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("Failed" + error);
  });

// Schema per la "collection"
const itemSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

// Modello per lo schema
const Item = mongoose.model("Item", itemSchema);

// Rotte per le operazioni CRUD
app.get('/api/items', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/api/items', (req, res) => {
  const newItem = new Item({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });

  newItem.save()
    .then(item => res.json(item))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/api/items/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => res.json(item))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/api/items/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
