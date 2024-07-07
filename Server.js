const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://rangakaarthi:mongomaanavan@website.tngsj.mongodb.net/MovieApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Mongoose schemas and models
const movieSchema = new mongoose.Schema({
  moviename: String,
  storyline: String,
  rating: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

const toWatchSchema = new mongoose.Schema({
  moviename: String,
  storyline: String,
  rating: Number,
});

const ToWatch = mongoose.model('ToWatch', toWatchSchema);

// Endpoint to search for a movie and add to ToWatch if found
app.post('/search', async (req, res) => {
  const { moviename } = req.body;
  try {
    const movie = await Movie.findOne({ moviename });
    if (movie) {
      // Add movie to ToWatch collection
      const newToWatch = new ToWatch({
        moviename: movie.moviename,
        storyline: movie.storyline,
        rating: movie.rating,
      });
      await newToWatch.save();
      res.json(movie);
    } else {
      res.json({ message: 'Movie not available' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to get all movies in ToWatch collection
app.get('/towatch', async (req, res) => {
  try {
    const towatches = await ToWatch.find();
    res.json(towatches);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


// Endpoint to update a movie's rating in the ToWatch collection
app.put('/towatch/:id', async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  try {
    await ToWatch.findByIdAndUpdate(id, { rating });
    res.json({ message: 'Movie rating updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to delete a movie from the ToWatch collection
app.delete('/towatch/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await ToWatch.findByIdAndDelete(id);
    res.json({ message: 'Movie deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
