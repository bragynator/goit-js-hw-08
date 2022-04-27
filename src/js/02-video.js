import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
player.on('timeupdate', throttle(saveCurrentTime, 2000));

function saveCurrentTime(evt) {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
}
