
export function shuffle(){
    let myArray = [0,1,2,3,4,5,6,7,8,9];
    let shuffled = myArray.sort(function( a, b ){
        console.log(Math.random() - 0.5);
        return Math.random() - 0.5;
        });
    return shuffled;
}




