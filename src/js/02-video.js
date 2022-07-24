import vimeo from "@vimeo/player";
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new vimeo(iframe);


player.on('timeupdate', throttle(onPlay, 1000));


function onPlay(time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
}

player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds);