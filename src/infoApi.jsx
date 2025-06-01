const API_KEY_LASTFM = "6dc5bb11a6e8e7bc1648fadc063dd032";
export const fetchLastFmArtist = (name) => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodeURIComponent(
    name
  )}&api_key=${API_KEY_LASTFM}&format=json`;

  return fetch(url).then((res) => res.json());
};

export const getTopArtists = () => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY_LASTFM}&format=json&limit=5`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.artists.artist);
};

export const getTopArtistsByGenre = (tag) => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${encodeURIComponent(
    tag
  )}&api_key=${API_KEY_LASTFM}&format=json&limit=5`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.topartists.artist);
};

export const fetchDeezerArtist = (name) => {
  const url = `https://corsproxy.io/?https://api.deezer.com/search/artist?q='${encodeURIComponent(name)}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.data); // He cambiado esto para que me de similares también
};