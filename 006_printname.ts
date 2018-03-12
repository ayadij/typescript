function printName(f, l) {
  var greeting : string = "Hi there, ";
  console.log(greeting + f + " " + l);

  var greeting : string = "Hey there, ";
  console.log(greeting + f + " " + l);
}
printName("Aya", "Dijkwel");


// cannot redefine a let statement
// let defines the scope inside function and restricts it
// var is considered to be a global variable bc it has global type properties
      // let greeting : string = "Hi there "
                  // vs
      // var greeting : string = "Hi there, ";
