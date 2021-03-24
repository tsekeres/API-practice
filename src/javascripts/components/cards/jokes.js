const getCard = () => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem; height: 20em">
        <img class="card-img-top" src="https://user-images.githubusercontent.com/74842096/112235731-3c5b1e00-8c0d-11eb-8791-d328e34e4582.png" alt="Joke Generator">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title"></h3>
          <div class="mt-auto">
            <a href="#" id="get-joke-btn" class="btn btn-dark">GET A JOKE</a>
          </div>
        </div>
      </div>`;
};

const getJoke = (jokeItem) => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML += `<div class="card" style="width: 18rem; height: 20em">
        <img class="card-img-top" src="https://user-images.githubusercontent.com/74842096/112235731-3c5b1e00-8c0d-11eb-8791-d328e34e4582.png" alt="Joke Generator">
        <div class="card-body d-flex flex-column">
          <h4 class="card-title text-light" id="setup">${jokeItem.setup}</h4>
          <h4 class="card-title text-light" id="punchline" style="display: none">${jokeItem.punchline}</h4>
          <div class="mt-auto">
            <a href="#" id="get-punchline-btn" class="btn btn-dark">GET PUNCHLINE</a>
            <a href="#" id="get-new-joke-btn" class="btn btn-dark" style="display: none">GET A NEW JOKE</a>
          </div>
        </div>
      </div>`;
};

export { getCard, getJoke };
