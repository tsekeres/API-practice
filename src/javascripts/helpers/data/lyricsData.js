import axios from 'axios';

const getLyrics = (lyricsObject) => new Promise((resolve, reject) => {
  axios.get(`https://api.lyrics.ovh/v1/${lyricsObject.artist}/${lyricsObject.title}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getLyrics;
