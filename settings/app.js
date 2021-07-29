import { changeColorSchemeToBnw, changeColorSchemeToPastel, changeColorSchemeToWashout, changeColorSchemeToDefault  } from './settings.js';
import {getSettings, setSettings} from '../utils/localStorage.js'

const form1 = document.getElementById('form1');

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
    



    
    // if ( scheme === 1 ) {
       
    //     const doc = document.getElementsByTagName('body');
    //     doc[0].style.backgroundColor = '#a2d2ffff'

    // }
    // if ( scheme === 2 ) {

    //     changeColorSchemeToWashout();

    // }
    // if ( scheme === 3 ) {

    //     changeColorSchemeToBnw();

    // }
    // if ( scheme === 4 ) {

    //     changeColorSchemeToDefault();

    // }    
})


function changeAppearance(colorScheme){




}

