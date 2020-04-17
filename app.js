//DOM element
const output = document.querySelector(".output");
const charAmountRange = document.querySelector("#charAmountRange");
const charAmountNumber = document.querySelector('#charAmountNumber');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeSymbols = document.getElementById('includeSymbols');
const button = document.querySelector('button');

charAmountNumber.addEventListener('input',syncValues);
charAmountRange.addEventListener('input',syncValues);

function syncValues(e){
    let values = e.target.value;
    charAmountNumber.value = values;
    charAmountRange.value = values;
    
}