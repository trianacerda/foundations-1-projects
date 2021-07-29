import { shuffle } from '../utils/shuffle.js';
import {getSettings, setSettings} from '../utils/localStorage.js'

const test = QUnit.test;

test('shuffle function is sorting order of songs in array', (expect) => {
    let myArray = [0,1,2,3,4,5,6,7,8,9];
    let shuffleArray = shuffle();
    
    const expected = true;
    let actual; 
    for (let i = 0; i < myArray.length; i++){
        if (myArray[i] !== shuffleArray[i]){
    actual = true;
    } else {
        actual = false;
    }
}

    expect.equal(actual, expected);
});

test ('does getSettings return default data if settings are unchanged',(expect) => {
    localStorage.removeItem('Settings');
    const fakeData = { 
        "playlist": 0,
        "scheme": "default",
        "shuffle": false
     }
     setSettings();
     const returnedFakeData = getSettings();
     expect.deepEqual(returnedFakeData, fakeData);
})

test ('does setSettings stringify a key, value pair in ls', (expect) => {
    localStorage.removeItem('Settings');
    const fakeDataStuff = {
        "playlist": 0,
        "scheme": "default",
        "shuffle": false
    }
    setSettings();
    const returnedFakeDataStuff = getSettings();
    expect.deepEqual(returnedFakeDataStuff, fakeDataStuff)
})

