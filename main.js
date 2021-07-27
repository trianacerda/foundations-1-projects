import PLAYLIST from "./music-data.js";
// [  {song -> PATH}, {song -> PATH}, {song -> PATH}, {song -> PATH}  ]

const musicPlayer = document.getElementById('music-player');


let current_song = 0;


setTrack(current_song);


function setTrack(song_index){

let current_path = `./assets/songs/${PLAYLIST[song_index].path}`;

musicPlayer.src = current_path;


}