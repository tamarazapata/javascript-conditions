let button = document.getElementById('login-btn');

function logPassword() {
    const num1 = document.getElementById('digit1').value ; 
    const num2 = document.getElementById('digit2').value ; 
    const num3 = document.getElementById('digit3').value ;

    let resultElement = document.getElementById('result');
    console.log('Digit 1:', num1);
    console.log('Digit 2:', num2);
    console.log('Digit 3:', num3);
    let password = num1 + num2 + num3;
    resultElement.textContent = `La contraseña ingresada es: ${password}`;
    if (password === '911') {
        console.log("Contraseña 1 correcta");
        resultElement.textContent = `Password 1 correcta 🎉`;
    } else if (password === '714') {
        resultElement.textContent = `Password 2 correcta ✅`;
        console.log("Contraseña 2 correcta");
    }  
    else {
        console.log("Contraseña incorrecta");
        resultElement.textContent = `Password incorrecta 😵‍💫, intente nuevamente`;
    }

    

}

button.addEventListener('click', logPassword);