const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/deezer/:artist', async (req, res) => {
  const artist = req.params.artist;
  const URL = `https://api.deezer.com/search/artist?q='${artist}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching from Deezer' });
  }
});

app.get('/api/deezer/tracklist/:artistId', async (req, res) => {
  const artistId = req.params.artistId;

  try {
    const response = await fetch(`https://api.deezer.com/artist/${artistId}/top?limit=50`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tracklist from Deezer' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy running on port: ${PORT}`);
});