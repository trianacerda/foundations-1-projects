
export function shuffle(){
    let myArray = [0,1,2,3,4,5,6,7,8,9];
    let shuffled = myArray.sort(function( a, b ){
        return Math.random() - 0.5;
        });
    return shuffled;
}



function changeColorSchemeToBnw() {
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay-BnW.png';

    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip-BnW.png';

    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play-BnW.png';

    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause-BnW.png';
    }

function changeColorSchemeToPastel(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay-pastel.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip-pastel.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play-pastel.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause-pastel.png';
    }

function changeColorSchemeToWashout(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay-washout.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip-washout.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play-washout.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause-washout.png';
    }
   
function changeColorSchemeToDefault(){
    let prevBtn = document.getElementById('previous-track');
    prevBtn.src = '../assets/buttons/replay.png';
    
    let nextBtn = document.getElementById('next-track');
    nextBtn.src = '../assets/buttons/skip.png';
    
    let playBtn = document.getElementById('play-pause');
    playBtn.src = '../assets/buttons/play.png';
    
    let pauseBtn = document.getElementById('play-pause');
    pauseBtn.src = '../assets/buttons/pause.png';
    }