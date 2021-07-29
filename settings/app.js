import { changeColorSchemeToBnw, changeColorSchemeToPastel, changeColorSchemeToWashout, changeColorSchemeToDefault  } from './settings.js';
import {getSettings, setSettings} from '../utils/localStorage.js'

const form1 = document.getElementById('form1');
var settingsData = getSettings();

form1.addEventListener('submit', (e) => {

    e.preventDefault(); 

    const formData = new FormData(form1);
    let scheme = formData.get('styles');
    let playlist = Number(formData.get('list'));
    let shuffle = formData.get('shuffle-play');
    console.log(playlist);
    if(shuffle === 'on'){
      shuffle = true;
    }
    else{
        shuffle = false;
    }

    setSettings(shuffle, playlist, scheme); 

  })
  
  if (settingsData !== '') {
    viewSettings();
  }



function viewSettings(){
  const currentColor = document.getElementById('current-color');
  const currentPlaylist = document.getElementById('current-playlist');
  const currentShuffle = document.getElementById('current-shuffle');
  currentColor.textContent = `Current Colorscheme: ${settingsData.scheme}`;
  currentPlaylist.textContent = `Current Playlist: Playlist ${settingsData.playlist + 1}`;
  currentShuffle.textContent = `Shuffle is On: ${settingsData.shuffle}`;
  const settingsBox = document.getElementById('current-settings');
  settingsBox.style.display='flex';
}
