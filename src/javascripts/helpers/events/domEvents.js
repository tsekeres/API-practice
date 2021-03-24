import { getJoke } from '../../components/cards/jokes';
import getJokes from '../data/jokeData';

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
  });
};

export default domEvents;
