import { getCard } from '../../components/cards/jokes';
import { getLyricsForm } from '../../components/cards/lyrics';
import { getWeatherForm } from '../../components/cards/weather';
import loadPage from '../../components/loadPage';

const navEvents = () => {
  document.querySelector('#home-page').addEventListener('click', (e) => {
    e.preventDefault();
    loadPage();
  });

  document.querySelector('#joke-generator').addEventListener('click', (e) => {
    e.preventDefault();
    getCard();
  });

  document.querySelector('#song-lyrics').addEventListener('click', (e) => {
    e.preventDefault();
    getLyricsForm();
  });

  document.querySelector('#weather').addEventListener('click', (e) => {
    e.preventDefault();
    getWeatherForm();
  });
};

export default navEvents;
