//DOM element
const output = document.querySelector(".output");
const charAmountRange = document.querySelector("#charAmountRange");
const charAmountNumber = document.querySelector('#charAmountNumber');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeSymbols = document.getElementById('includeSymbols');
const button = document.querySelector('button');
const form = document.querySelector('form');

charAmountNumber.addEventListener('input',syncValues);
charAmountRange.addEventListener('input',syncValues);

//Function which syncronises range and input values...
function syncValues(e){
    let values = e.target.value;
    charAmountNumber.value = values;
    charAmountRange.value = values;    
}

form.addEventListener('submit',e =>{
   let charAmount = charAmountNumber.value;
   let uppercase = includeUppercase.checked;
   let lowercase =includeLowercase.checked;
   let symbols = includeSymbols.checked;
   const password = generatePassword(charAmount,uppercase,lowercase,symbols);
})

//console.log(String.fromCharCode(66))

//Function which Generate password..
function generatePassword(charAmount,uppercase,lowercase,symbols){
      
}

//Function which charCode array
let arr = [];
function lowToHigh(low,high){
  for(let i=low;i<=high;i++){
     arr.push(i);
  }
}