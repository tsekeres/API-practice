import { getCard } from '../components/cards/jokes';
import domBuilder from '../components/domBuilder';
import getJokes from './data/jokeData';
import domEvents from './events/domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  getJokes().then((jokeItem) => {
    getCard(jokeItem);
  });
};

export default startApp;
