import PLAYLIST from "./music-data.js";
import { shuffle } from "./utils/utils.js";

const musicPlayer = document.getElementById('music-player');
const playBtn = document.getElementById('play-pause');
const previousBtn = document.getElementById('previous-track');
const nextBtn = document.getElementById('next-track');
let current_path = "";
const shuffledIndex = shuffle();
let shuffled_boolean = false //getLocalStorage().shuffled // TRUE Or FALSE
let current_song = 0;
let trackPlaying = false;

setTrack(current_song);

playBtn.addEventListener('click', () => {
    if (trackPlaying === false) {
        playTrack();
    } else { pauseTrack(); }
})
nextBtn.addEventListener('click', nextTrack);
previousBtn.addEventListener('click',previousTrack);
musicPlayer.addEventListener('ended', nextTrack);


function setTrack(song_index){

    if (shuffled_boolean === true){ 

         current_path = `${PLAYLIST[shuffledIndex[song_index]].path}`;
         console.log(current_path)
         musicPlayer.src = current_path;

        }

    else {  

        current_path = './assets/songs/' + `${PLAYLIST[song_index].path}`;
        console.log(current_path)
        musicPlayer.src = current_path;
    }
    
}

function nextTrack() {
    if (current_song < PLAYLIST.length -1) {
        current_song +=1; 
    } else {current_song = 0;
    }
    setTrack(current_song);
    playTrack();
    }

function previousTrack() {
    if (current_song > 0 ) {
        current_song -= 1; console.log(current_song);
    } else {current_song = PLAYLIST.length -1; console.log(current_song);
    }
    setTrack(current_song);
    playTrack();
    }

function playTrack() {
    musicPlayer.play();
    trackPlaying = true;
    playBtn.innerHTML = `<img src='./assets/buttons/pause.png' alt="pause button">`;
    
}

function pauseTrack() {
    musicPlayer.pause();
    trackPlaying = false;
    playBtn.innerHTML = `<img src='./assets/buttons/play.png' alt="play button">`;
}



