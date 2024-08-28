const image = document.getElementById('clickeable-img');

function changeBorder() { 
    let currentColor = image.style.borderColor
    console.log(currentColor) 
    if (currentColor = 'black') {
        image.style.borderColor = 'red';
        currentColor = 'red'
        console.log(currentColor)
    } else if (currentColor = 'red') {
        image.style.borderColor = 'none';
        currentColor = 'none'
        console.log(currentColor)
    } else {
        image.style.borderColor = 'black';
        currentColor = 'black'
        console.log(currentColor)
    }
    console.log(currentColor)
}

image.addEventListener('click', changeBorder);
