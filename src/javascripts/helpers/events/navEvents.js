import { getCard } from '../../components/cards/jokes';
import { getLyricsForm } from '../../components/cards/lyrics';
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
};

export default navEvents;
