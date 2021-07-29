export function changeColorSchemeToBnw() {
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = './assets/buttons/replay-BnW.png';

    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = './assets/buttons/skip-BnW.png';

    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = './assets/buttons/play-BnW.png';

    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = './assets/buttons/pause-BnW.png';

    let body = document.getElementsByTagName('body');
    console.log(body);
    body[0].style.backgroundColor = '#000';
    }
    
export function changeColorSchemeToPastel(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = './assets/buttons/replay-pastel.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = './assets/buttons/skip-pastel.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = './assets/buttons/play-pastel.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = './assets/buttons/pause-pastel.png';

    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#a2d2ffff';
    }

export function changeColorSchemeToWashout(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = './assets/buttons/replay-washout.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = './assets/buttons/skip-washout.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = './assets/buttons/play-washout.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = './assets/buttons/pause-washout.png';

    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#264653';
    }
   
export function changeColorSchemeToDefault(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = './assets/buttons/replay.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = './assets/buttons/skip.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = './assets/buttons/play.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = './assets/buttons/pause.png';

    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#00baffff';
    }

 