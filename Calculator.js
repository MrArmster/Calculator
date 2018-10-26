function calc() { 
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  }

  document.querySelector("#result").innerHTML = calculate;
}



/* 1)grab value from inside the form in html, create a function, add variables for input fields and operation desired.
2)calulate the values by declaring a var with no value, create if else if statements for all options this is where you add values to the operator.
3)output them inside the website which can be done on the console or inside the actual website depeneding on what is desired*/
