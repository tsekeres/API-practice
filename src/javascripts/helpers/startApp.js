import domBuilder from '../components/domBuilder';
import loadPage from '../components/loadPage';
import navBar from '../components/navBar';
import domEvents from './events/domEvents';
import navEvents from './events/navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navEvents();
  loadPage();
};

export default startApp;
