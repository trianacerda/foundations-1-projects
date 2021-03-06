const SETTINGS = 'Settings';

const defaultScheme = 'default'; 
const defaultPlaylist = 0;


export function getSettings(){

    let settings = localStorage.getItem( SETTINGS || '' );
    let parsedSettings = JSON.parse(settings);

    return parsedSettings;

}

export function setSettings( shuffledEnabled = false, selected_playlist = defaultPlaylist, selected_scheme = defaultScheme){

let settings = {
    
    playlist: selected_playlist,
    scheme: selected_scheme,
    shuffle: shuffledEnabled
};

localStorage.setItem(SETTINGS, JSON.stringify(settings));

}