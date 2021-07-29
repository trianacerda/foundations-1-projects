import PLAYLIST from "./data/music-data.js";
import { shuffle } from "./utils/shuffle.js";
import { getSettings, setSettings } from "./utils/localStorage.js";
import { changeColorSchemeToBnw, changeColorSchemeToDefault, changeColorSchemeToPastel, changeColorSchemeToWashout } from "./settings/settings.js";
const musicPlayer = document.getElementById('music-player');
const playBtn = document.getElementById('play-pause');
const previousBtn = document.getElementById('previous-track');
const nextBtn = document.getElementById('next-track');

let current_path = "";
const shuffledIndex = shuffle();

let settings = getSettings();
if( settings === null){
    setSettings();
}

let shuffled_boolean = settings.shuffle;
let playlist = settings.playlist;
let color_Scheme = settings.scheme; 
let current_song = 0;
let trackPlaying = false;

setScheme(color_Scheme, 'play');


function setScheme(str, playPauseToggle){
if( str === 'default' ){
    changeColorSchemeToDefault(playPauseToggle);
}
if( str === 'washedout' ){
    changeColorSchemeToWashout(playPauseToggle);
}
if( str === 'blackandwhite' ){

    changeColorSchemeToBnw(playPauseToggle);
}
if( str === 'pastel' ){
    changeColorSchemeToPastel(playPauseToggle);
}
}

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

         current_path = './assets/songs/' + `${PLAYLIST[playlist][shuffledIndex[song_index]].path}`;
         musicPlayer.src = current_path;

        }

    else {  

        current_path = './assets/songs/' + `${PLAYLIST[playlist][song_index].path}`;
        musicPlayer.src = current_path;
    }
    
}

function nextTrack() {
    if (current_song < PLAYLIST[playlist].length -1) {
        current_song +=1; 
    } else {current_song = 0;
    }
    setTrack(current_song);
    playTrack();
    }

function previousTrack() {
    if (current_song > 0 ) {
        current_song -= 1; console.log(current_song);
    } else {current_song = PLAYLIST[playlist].length -1; console.log(current_song);
    }
    setTrack(current_song);
    playTrack();
    }

function playTrack() {
    musicPlayer.play();
    trackPlaying = true;
    setScheme(color_Scheme, 'pause');
}

function pauseTrack() {
    musicPlayer.pause();
    trackPlaying = false;
    setScheme(color_Scheme, 'play');
}
