import { shuffle } from '../utils/utils.js';

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