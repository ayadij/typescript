// functions have access to any public variables in the outer scope

// contrived example






// function nameFunction(name: string) : void {
//   var n : string = name;

//   function printName() {
//     console.log(n);
//   }
//   printName();
// }

// nameFunction('Jared'); 





//The inner function maintain access to the outer scope even AFTER the values are returned!
function nameFunction(name: string) {
 var n : string = name;
 return function() {
   console.log(n);
 }
}
var nameAgain = nameFunction('Caleb');
nameAgain();

