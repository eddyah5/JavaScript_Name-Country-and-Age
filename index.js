//collect user input and store it in a variable called "name"
var name = prompt("What is your name?");
//collect user input and store it in a variable called "height"
var height = prompt("How tall are you?");
//collect user input and store it in a variable called "country"
var country = prompt("Where are you from?");
if (name === "") {
  name = "Anonymous";
}
console.log("Your name is " + name);
console.log("Your height is " + height);
console.log("Your country is " + country);
//print out the user input to the page
document.write("Your name is " + name);
document.write("Your height is " + height);
document.write("Your country is " + country);