var arr = ['Go for a run', 'Do study', 'Let\'s go to partyyy', 'Eat healthy food', 'How\'s coding going?'];
let size = arr.length;

function generateRandomOutput(number) {
    console.log(arr[number]);
}

while (true) {
    let number = Math.floor(Math.random() * size);
    generateRandomOutput(number);

    let choice = prompt('Wanna continue? Y/N: ');
    if (choice.toLowerCase() === 'n') {
        console.log('Goodbye!');
        break; 
    }
}
