let num1 = document.querySelector('#input1');
let num2 = document.querySelector('#input2');
let num3 = document.querySelector('#input3');

const stickersButton = document.getElementById('stickersbtn'); // Remove the '#' from 'getElementById'
const resultElement = document.getElementById('result');


function sumar() {
    const value1 = parseInt(num1.value) || 0; 
    const value2 = parseInt(num2.value) || 0;
    const value3 = parseInt(num3.value) || 0;

    const suma = value1 + value2 + value3;

    if (suma > 10) {
        console.log("cantidad no cumple");
        resultElement.textContent = `Llevas muchos stickers`;
    } else {
        console.log("cantidad de stickers cumple");
        resultElement.textContent = `Stickers Totales: ${suma}`;
        }
}

stickersButton.addEventListener('click', sumar);
