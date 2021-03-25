import { getCard } from '../../components/cards/jokes';
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
};

export default navEvents;
