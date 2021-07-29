export function changeColorSchemeToBnw() {
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay-BnW.png' alt="previous-track">`;

    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip-BnW.png' alt="next-track">`;

    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = `<img src='./assets/buttons/play-BnW.png' alt="play-button">`;

    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = `<img src='./assets/buttons/pause-BnW.png' alt="play-button">`;

    let body = document.getElementsByTagName('body');
    console.log(body);
    body[0].style.backgroundColor = '#000';
    }
    
export function changeColorSchemeToPastel(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay-pastel.png' alt="previous-track">`;
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip-pastel.png' alt="next-track">`;
    
    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = `<img src='./assets/buttons/play-pastel.png' alt="play-button">`;
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = `<img src='./assets/buttons/pause-pastel.png' alt="pause-button">`;

    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#a2d2ffff';
    }

export function changeColorSchemeToWashout(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay-washout.png' alt="previous-track">`;
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip-washout.png' alt="next-track">`;
    
    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = `<img src='./assets/buttons/play-washout.png' alt="play-button">`;
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = `<img src='./assets/buttons/pause-washout.png' alt="pause-button">`;

    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#264653';
    }
   
export function changeColorSchemeToDefault(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.innerHTML = `<img src='./assets/buttons/replay.png' alt="previous-track">`;
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.innerHTML = `<img src='./assets/buttons/skip.png' alt="next-track">`;
    
    let playBtn = document.getElementById('play-pause');
    playBtn.innerHTML = `<img src='./assets/buttons/play.png' alt="play-button">`;
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.innerHTML = `<img src='./assets/buttons/pause.png' alt="play-button">`;

    let body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = '#00baffff';
    }

 