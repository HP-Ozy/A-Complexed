const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;



app.use(cors());



mongoose.connect('mongodb://localhost:27017/')
  .then(() => {
    console.log('Connessione al database riuscita!');
    // Avvia il server solo dopo la connessione al database
    app.listen(port, () => {
      console.log(`Server in ascolto sulla porta ${port}`);
    });
  })

  .catch((err) => {
    console.error('Errore di connessione al database:', err);
  });
 

// Mongoose Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Mongoose Model
const User = mongoose.model('User', userSchema);


// Example route to create a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Definizione delle altre route o logiche del server qui...
