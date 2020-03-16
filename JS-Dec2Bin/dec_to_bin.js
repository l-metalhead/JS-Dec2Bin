var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

buttonElement.onclick = function() {
    alert(dec2bin(parseInt(inputElement.value)));
}

function dec2bin(decimal) {
    return decimal + 1;
}
