// Code your solutions in this file
/* const gifts  = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);
*/

function writeCards(array, eventName) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    while (number > -1) {
        console.log(number--);
    }
}
