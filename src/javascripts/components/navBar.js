const navBar = () => {
  document.querySelector('#navigation').innerHTML = `<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">API Fun</a>
      <div class="navbar-nav">
        <a class="nav-link active" id="home-page" aria-current="page" href="#">Home</a>
        <a class="nav-link" id="joke-generator" href="#">Jokes</a>
        <a class="nav-link" id="song-lyrics" href="#">Songs</a>
        <a class="nav-link" id="weather" href="#">Weather</a>
      </div>
    </div>
  </nav>`;
};

export default navBar;
