let image = document.getElementById("clickeable-img");
let currentColor = image.style.borderColor || window.getComputedStyle(image).borderColor;
let currentBorder = image.style.border || window.getComputedStyle(image).border;
console.log(currentBorder)
console.log(currentColor)


function changeBorder() { 
if (currentBorder === "0px none rgba(0, 0, 0, 0)" && currentColor === "rgba(0, 0, 0, 0)" || image.style.borderColor  == "initial") {
        image.style.borderColor = "red";
        image.style.border = "2px solid red"
        currentColor = "red"
        console.log("Border: " + image.style.border  + " | Border color: " + image.style.borderColor )
        console.log(image.style.border == "2px solid red" )
    } 
    else if (image.style.border == "2px solid red") {
        image.style.borderColor = "transparent"; 
        image.style.border = "0px"
        console.log("Border: " + image.style.border  + " | Border color: " + image.style.borderColor )
    }
}
