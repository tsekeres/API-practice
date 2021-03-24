import { getCard, getJokeSetup, getPunchline } from '../../components/cards/jokes';
import getJokes from '../data/jokeData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJokes().then((jokeItem) => {
        getJokeSetup(jokeItem);
      });
    }

    if (e.target.id.includes('get-punchline-btn')) {
      getJokes().then((jokeItem) => {
        getPunchline(jokeItem);
      });
    }

    if (e.target.id.includes('get-new-joke-btn')) {
      getJokes().then((jokeItem) => {
        getCard(jokeItem);
      });
    }
  });
};

export default domEvents;
