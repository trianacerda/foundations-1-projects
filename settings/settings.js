// would love to see this refactored to avoid repetitive code
// you could LIKELY make your life a lot simpler by making the
// buttons using pure CSS instead of images
// however, even without that, you could likely update this to interpolate
// the color scheme


export function changeColorSchemeToBnw(str) {
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay-BnW.png' alt="previous-track">`;

    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip-BnW.png' alt="next-track">`;
    if (str === 'pause') {
        let pauseBtn = document.getElementById('play-pause');
        pauseBtn.innerHTML = `<img src='./assets/buttons/pause-BnW.png' alt="pause-button">`;
    }
    if (str === 'play') {
        let playBtn = document.getElementById('play-pause');
        playBtn.innerHTML = `<img src='./assets/buttons/play-BnW.png' alt="play-button">`;
    }
    let body = document.getElementsByTagName('body');
    console.log(body);
    body[0].style.backgroundColor = '#000';
    }
    
export function changeColorSchemeToPastel(str){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay-pastel.png' alt="previous-track">`;
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip-pastel.png' alt="next-track">`;
    
    if (str === 'pause') {
        let pauseBtn = document.getElementById('play-pause');
        pauseBtn.innerHTML = `<img src='./assets/buttons/pause-pastel.png' alt="pause-button">`;
    }
    if (str === 'play') {
        let playBtn = document.getElementById('play-pause');
        playBtn.innerHTML = `<img src='./assets/buttons/play-pastel.png' alt="play-button">`;
    }
    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#a2d2ffff';
    }
    

export function changeColorSchemeToWashout(str){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay-washout.png' alt="previous-track">`;
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip-washout.png' alt="next-track">`;
    
    if (str === 'pause') {
        let pauseBtn = document.getElementById('play-pause');
        pauseBtn.innerHTML = `<img src='./assets/buttons/pause-washout.png' alt="pause-button">`;
    }
    if (str === 'play') {
        let playBtn = document.getElementById('play-pause');
        playBtn.innerHTML = `<img src='./assets/buttons/play-washout.png' alt="play-button">`;
    }
    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#3d405bff';
    }
   
export function changeColorSchemeToDefault(str){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay.png' alt="previous-track">`;
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip.png' alt="next-track">`;
    
    if (str === 'pause') {
        let pauseBtn = document.getElementById('play-pause');
        pauseBtn.innerHTML = `<img src='./assets/buttons/pause.png' alt="pause-button">`;
    } 
    if (str === 'play') {
        let playBtn = document.getElementById('play-pause');
        playBtn.innerHTML = `<img src='./assets/buttons/play.png' alt="play-button">`;
    }
    
    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#00baffff';
    }

 