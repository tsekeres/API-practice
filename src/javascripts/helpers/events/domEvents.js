import { getJoke } from '../../components/cards/jokes';
import { getLyricsForm, printSong } from '../../components/cards/lyrics';
import { printWeather } from '../../components/cards/weather';
import getJokes from '../data/jokeData';
import getLyrics from '../data/lyricsData';
import getWeather from '../data/weatherData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJokes().then((jokeItem) => getJoke(jokeItem));
    }

    if (e.target.id.includes('get-punchline-btn')) {
      document.querySelector('#punchline').style.display = 'inline';
      document.querySelector('#get-punchline-btn').style.display = 'none';
      document.querySelector('#get-new-joke-btn').style.display = 'inline';
    }

    if (e.target.id.includes('get-new-joke-btn')) {
      getJokes().then((jokeItem) => getJoke(jokeItem));
    }

    if (e.target.id.includes('search-lyrics')) {
      e.preventDefault();
      const lyricsObject = {
        artist: document.querySelector('#artist').value,
        title: document.querySelector('#song-title').value,
      };
      getLyrics(lyricsObject).then((lyrics) => printSong(lyricsObject, lyrics));
    }

    if (e.target.id.includes('get-new-song')) {
      getLyricsForm();
    }

    if (e.target.id.includes('search-weather')) {
      e.preventDefault();
      const weatherObject = {
        city: document.querySelector('#city').value,
      };
      getWeather(weatherObject).then((weather) => printWeather(weatherObject, weather));
    }
  });
};

export default domEvents;
