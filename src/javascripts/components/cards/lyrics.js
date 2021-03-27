const getLyricsForm = () => {
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML += `<form class="form-container" style="width 25em"><div class="form-title"><h5>Song Lyric Search Form</h5></div>
  <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label" required>Artist:</label>
  <input type="text" class="form-control" id="artist" placeholder="Type and artist or group">
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label" required>Song Title:</label>
  <input type="text" class="form-control" id="song-title" placeholder="Type a song title">
</div>
<button type="submit" class="btn btn-success" id="search-lyrics">SEARCH FOR LYRICS</button>

</form>`;
};

const printSong = (lyricsObject, lyrics) => {
  document.querySelector('#title-container').innerHTML = '';
  document.querySelector('#title-container').innerHTML = '<button type="submit" class="btn btn-success" id="get-new-song">Search Again?</button>';
  document.querySelector('#card-container').innerHTML = '';
  document.querySelector('#card-container').innerHTML += `
  <h2 class="song-title">${lyricsObject.title}</h2>
  <h4 class="artist">By: ${lyricsObject.artist}</h4>
  <div class="requested-lyrics">${lyrics.lyrics}</div>`;
};

export { getLyricsForm, printSong };
