const getLyricsForm = () => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML += `<form><div class="mb-3">
  <label for="formGroupExampleInput" class="form-label" required>Artist:</label>
  <input type="text" class="form-control" id="artist" placeholder="Type and artist or group">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label" required>Song Title:</label>
  <input type="text" class="form-control" id="song-title" placeholder="Type a song title">
</div>
<button type="submit" class="btn btn-primary">SEARCH FOR LYRICS</button>
</form>`;
};

const printSong = () => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML += '<div class="requested-lyrics"></div>';
};

export { getLyricsForm, printSong };
