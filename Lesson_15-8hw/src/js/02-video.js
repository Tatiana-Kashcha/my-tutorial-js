// const value = 10;

// const test = 99;

// function add(a, b) {
//   return a + b + test;
// }

// function sum(a, b) {
//   return a * b;
// }

// export {add}

// function add(a, b) {
//   return a + b + test;
// }

// const a = 10;
// const b = 20;

// export { a };
// export default b;
//--------------------------02 дз---------------------------------
import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const playerSetItem = function (data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
};

const secondsItem = JSON.parse(localStorage.getItem(STORAGE_KEY));
//--не потрібна функція----
// const playerGetItem = function (seconds) {
//   JSON.parse(localStorage.getItem(STORAGE_KEY));
// };
//------------------

player.on('timeupdate', throttle(playerSetItem, 1000));

player
  .setCurrentTime(secondsItem)
  // .then(playerGetItem)
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

//------це для ініціалзації плеєра----------------------
// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
//------------------------------------------
