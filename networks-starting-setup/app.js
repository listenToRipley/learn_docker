const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;
const mongoose = require('mongoose');

const Favorite = require('./models/favorite');

const app = express();

app.use(bodyParser.json());

app.get('/favorites', async (req, res) => {
  const favorites = await Favorite.find();
  res.status(200).json({
    favorites: favorites,
  });
});

app.post('/favorites', async (req, res) => {
  const favName = req.body.name;
  const favType = req.body.type;
  const favUrl = req.body.url;

  try {
    if (favType !== 'movie' && favType !== 'character') {
      throw new Error('"type" should be "movie" or "character"!');
    }
    const existingFav = await Favorite.findOne({ name: favName });
    if (existingFav) {
      throw new Error('Favorite exists already!');
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const favorite = new Favorite({
    name: favName,
    type: favType,
    url: favUrl,
  });

  try {
    await favorite.save();
    res
      .status(201)
      .json({ message: 'Favorite saved!', favorite: favorite.toObject() });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/films');
    res.status(200).json({ movies: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});

app.get('/people', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/people');
    res.status(200).json({ people: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong.' });
  }
});


// notes
// if you don't have mongoose locally installed this will fail the first time around.

// app.listen(3000); // just spin up the webserver
//get container up docker build -t favorites-node . 
// run in de attached mode 
// docker run --name favorites -d --rm -p 3000:3000 favorites-node

//special address for request domain
mongoose.connect(
  // 'mongodb://localhost:27017/swfavorites',
    //special address that Docker can see and know where it should go, translated to host machine inside docker machine. 
  // 'mongodb://host.docker.internal:27017/swfavorites',
  //can be any url or http request: host.docker.internal 
  // 'mongodb://IPAddress:27017/swfavorites',
  // if the two containers share a network, then you can can the container's name instead of the IPAddress 
  'mongodb://mongodb:27017/swfavorites',
  //this is just list host.docker.internal
  // networkconnection 
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(3000);
    }
  }
);