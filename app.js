//DOM element
const output = document.querySelector(".output");
const charAmountRange = document.querySelector("#charAmountRange");
const charAmountNumber = document.querySelector('#charAmountNumber');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbercase = document.getElementById('includeNumbercase');
const includeSymbols = document.getElementById('includeSymbols');
const button = document.querySelector('button');
const form = document.querySelector('form');


//CharCodes
const UPPERCASE_CHAR_CODE = lowToHigh(65,90);
const LOWERCASE_CHAR_CODE = lowToHigh(97,122);
const NUMBER_CHAR_CODE = lowToHigh(48,57)
const SYMBOLS_CHAR_CODE = lowToHigh(33,47).concat(
  lowToHigh(58,64)
).concat(lowToHigh(91,96)).concat(lowToHigh(123,126));

// console.log(UPPERCASE_CHAR_CODE);
// console.log(NUMBER_CHAR_CODE);

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
   let number =includeNumbercase.checked;
   let symbols = includeSymbols.checked;
   var password = generatePassword(charAmount,uppercase,number,symbols);
   output.innerHTML = password;
   
})

//console.log(String.fromCharCode(66))

//Function which Generate password..
function generatePassword(charAmount,uppercase,number,symbols){
      let Ccode = LOWERCASE_CHAR_CODE;
      if(uppercase){Ccode = Ccode.concat(UPPERCASE_CHAR_CODE)};
      if(number){Ccode = Ccode.concat(NUMBER_CHAR_CODE)};
      if(symbols){Ccode = Ccode.concat(SYMBOLS_CHAR_CODE)}
      
      let passwordCharacter = [];
      for(let i =0 ;i<=charAmount;i++){
         const characterCode = Ccode[Math.floor(Math.random()*Ccode.length)];
         passwordCharacter.push(String.fromCharCode(characterCode));
      }
      return passwordCharacter.join('');
}

//Function which charCode array
function lowToHigh(low,high){
    var arr = [];
  for(let i=low;i<=high;i++){
     arr.push(i);
  }
  return arr;
}