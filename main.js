import PLAYLIST from "./music-data.js";
// [  {song -> PATH}, {song -> PATH}, {song -> PATH}, {song -> PATH}  ]

const musicPlayer = document.getElementById('music-player');
// musicPlayer.setAttribute('src', '');
const playBtn = document.getElementById('play-pause');
const previousBtn = document.getElementById('previous-track');
const nextBtn = document.getElementById('next-track');


let current_song = 0;
let trackPlaying = false;


playBtn.addEventListener('click', () => {
    if (trackPlaying === false) {
        playTrack();
    } else { pauseTrack(); }
})

let current_path = "";

// function setTrack(song_index){
    
//     current_path = './assets/songs/' + `${PLAYLIST[song_index].path}`;
    
//     musicPlayer.src = current_path;
    
//     // playTrack();
    
// }

// setTrack(current_song);

console.log(current_path);
console.log('update3');

function playTrack() {
    musicPlayer.play();
    trackPlaying = true;
}

function pauseTrack() {
    musicPlayer.pause();
    trackPlaying = false;
}


