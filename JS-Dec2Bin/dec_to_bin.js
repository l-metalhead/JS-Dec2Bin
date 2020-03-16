var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = function() {
    var resultadoElement = document.querySelector('#resultado');
    var pElement = document.createElement('p');
    var pText = document.createTextNode(dec2bin(parseInt(inputElement.value)));

    resultadoElement.innerHTML = '';  // Reseta resultado

    pElement.appendChild(pText);
    resultadoElement.appendChild(pElement);
}

function dec2bin(decimal) {
    var bin = [];

    if(decimal == 0) {
        return decimal;
    }
    while(decimal >= 1) {
        if(decimal == 1) {
            bin.push(decimal);
            break;
        }

        bin.push(Math.floor(decimal % 2));
        decimal /= 2;
    }

    var resultado = bin.reverse().join('');

    return resultado;
}
