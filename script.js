document.addEventListener('DOMContentLoaded', () => {
  const songImage = document.querySelector('.song-image');
  const playButton = document.getElementById('play-button');
  const pauseButton = document.getElementById('pause-button');
  const stopButton = document.getElementById('stop-button');
  const skipSlider = document.getElementById('skip-slider');
  const mp3FileInput = document.getElementById('mp3-file-input');
  const songNameContainer = document.querySelector('.song-name');

  let audioPlayer = null;

  function playSong() {
    audioPlayer = new Audio(URL.createObjectURL(mp3FileInput.files[0]));
    audioPlayer.play();
    pauseButton.disabled = false;
    stopButton.disabled = false;

    // Update the song name
    songNameContainer.textContent = mp3FileInput.files[0].name;
  }

  function pauseSong() {
    audioPlayer.pause();
  }

  function stopSong() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  function skipSong() {
    const skipValue = parseInt(skipSlider.value);
    audioPlayer.currentTime = (audioPlayer.duration * skipValue) / 100;
  }

  playButton.addEventListener('click', playSong);
  pauseButton.addEventListener('click', pauseSong);
  stopButton.addEventListener('click', stopSong);
  skipSlider.addEventListener('input', skipSong);
});
