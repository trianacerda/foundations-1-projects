import PLAYLIST from "./music-data.js";
// [  {song -> PATH}, {song -> PATH}, {song -> PATH}, {song -> PATH}  ]

const musicPlayer = document.getElementById('music-player');
const playBtn = document.getElementById('play-pause');
const previousBtn = document.getElementById('previous-track');
const nextBtn = document.getElementById('next-track');


let current_song = 0;
let trackPlaying = false;

setTrack(current_song);

playBtn.addEventListener('click', () => {
    if (trackPlaying === false) {
        playTrack();
    } else { pauseTrack(); }
})

function setTrack(song_index){

let current_path = `./assets/songs/${PLAYLIST[song_index].path}`;

musicPlayer.src = current_path;

// playTrack();

}

console.log(current_path);

function playTrack() {
    musicPlayer.play();
    trackPlaying = true;
}

function pauseTrack() {
    musicPlayer.pause();
    trackPlaying = false;
}


