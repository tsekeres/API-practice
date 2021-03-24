import { getCard } from '../components/cards/jokes';
import domBuilder from '../components/domBuilder';
import domEvents from './events/domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  getCard();
};

export default startApp;
