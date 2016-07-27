

//var a = document.getElementById(“input1”).value;
//var b = document.getElementById(“input2”).value;{

//var answer = (a + b);
 //var sum = answer
 //button is an object
//var bSolution = document.querySelector(“button”);
 //bSolution.addEventListener(“click”, function(event){


 //var firstNumber = document.getElementById("input1").value;
 //var secondNumber = document.getElementById("input1").value;


 //var firstNumber = document.getElementById("input1").valueAsNumber;
 //var secondNumber = document.getElementById("input2").valueAsNumber;

 var buttonElement = document.querySelector("button");
 buttonElement.addEventListener("click", function(event){
   var firstNumber = document.getElementById("input1").valueAsNumber;
   var secondNumber = document.getElementById("input2").valueAsNumber;
   var result = firstNumber + secondNumber;
   var answerInput = document.querySelector("#answer");
   answerInput.value = result;
   console.log(result);
 })





 //var sumNumber = (firstNumber + secondNumber)


//var calculate = document.querySelector("input");
