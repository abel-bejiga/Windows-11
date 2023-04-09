// C (clear) button/////////////////////
let calcInput = $('#calc-input');
let regex=/^[0-9-./+=*]+$/;

calcInput.on('input', inputValue);
 function inputValue(){
    calcInput.val().match(regex) ? calcInput.val() : clearClicked();

$('#clear-one-val').click(clearOneValue);
 function clearOneValue(inputArr){
    inputArr = calcInput.val();
    let digitArray = inputArr.toString().split('')
    digitArray.pop()

    console.log(digitArray)

 }

};
$('#calc-clear').click(clearClicked);
    function clearClicked(){
    calcInput.val('');
};

let numPad = Array.from(Array(7).keys())
console.log(numPad)