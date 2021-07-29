export function changeColorSchemeToBnw() {
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay-BnW.png';

    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip-BnW.png';

    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play-BnW.png';

    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause-BnW.png';

    let body = document.getElementsByTagName('body');
    body.style.backgroundColor = '#000';
    }
    
export function changeColorSchemeToPastel(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay-pastel.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip-pastel.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play-pastel.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause-pastel.png';

    let body = document.getElementsByTagName('body');
    body.style.backgroundColor = '#a2d2ffff';
    }

export function changeColorSchemeToWashout(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay-washout.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip-washout.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play-washout.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause-washout.png';

    let body = document.getElementsByTagName('body');
    body.style.backgroundColor = '#264653';
    }
   
export function changeColorSchemeToDefault(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause.png';

    let body = document.getElementsByTagName('body');
    body.style.backgroundColor = '#00baffff';
    }

 