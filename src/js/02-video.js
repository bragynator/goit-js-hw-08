import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';

const player = new Player('vimeo-player');

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(console.log('Play the video, please!!!'));
player.on('timeupdate', throttle(saveCurrentTime, 2000));
player.on('ended', debounce(deleteSavedTime, 2000));

function saveCurrentTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}

function deleteSavedTime() {
  localStorage.removeItem('videoplayer-current-time');
}
