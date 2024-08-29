let image = document.getElementById("clickeable-img");
let currentColor = image.style.borderColor || window.getComputedStyle(image).borderColor;

function changeBorder() { 
    if (currentColor === "" || currentColor === "black" || currentColor === "rgb(0, 0, 0)") {
        image.style.borderColor = "red";
        currentColor = "red"; 
        console.log(image.style.borderColor);
    } 
    else if (currentColor === "red" || currentColor === "rgb(255, 0, 0)") {
        image.style.borderColor = ""; 
        currentColor = ""; 
        console.log(image.style.borderColor);
    }
    
}
