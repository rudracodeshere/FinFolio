const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully!');
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello from the FinFolio API!');
});

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
app.use('/api/stocks', require('./routes/stocks'));
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/ai', require('./routes/ai'));
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
